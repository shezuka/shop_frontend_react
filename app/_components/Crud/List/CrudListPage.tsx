"use client";

import React from "react";
import {
  CrudItemFieldType,
  CrudListViewPropsType,
} from "@/app/_components/Crud/types";
import axios from "@/app/_utils/axios";
import CrudListTableView from "@/app/_components/Crud/List/CrudListTableView";
import LoaderSpinner from "@/app/_components/Loader/LoaderSpinner";
import Pagination from "@/app/_components/Crud/Pagination";
import Button from "@/app/_components/Button";
import PageTitle from "@/app/_components/PageTitle";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function CrudListPage({
  pageTitle,
  fields,
  itemsApiUrl,
  listViewComponent,
  create,
}: Readonly<{
  pageTitle: string;
  fields: CrudItemFieldType[];
  itemsApiUrl: string;
  create?: boolean;
  listViewComponent?: (props: CrudListViewPropsType) => React.ReactElement;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(20);
  const [totalItems, setTotalItems] = React.useState(0);

  const onCreateClicked = React.useCallback(() => {
    router.push(`${pathname}/create`);
  }, [router, pathname]);

  React.useEffect(() => {
    let cancel = false;

    setLoading(true);
    axios
      .get(itemsApiUrl, {
        params: { offset: page * pageSize, limit: pageSize },
      })
      .then((resp) => {
        if (cancel) return;
        setTotalItems(parseInt(resp.headers["x-total-count"]));
        setItems(resp.data);
        setLoading(false);
      });

    return () => {
      cancel = true;
    };
  }, [itemsApiUrl, page, pageSize]);

  const ListViewComponent: (
    props: CrudListViewPropsType,
  ) => React.ReactElement = listViewComponent || CrudListTableView;
  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      {create === true ? (
        <div className="mb-2 flex flex-row">
          <Button onClick={onCreateClicked}>Create new item</Button>
        </div>
      ) : null}
      <div className="flex flex-row items-right justify-between">
        <div className="flex flex-row rounded-md items-center mr-5 bg-primary-500">
          <span className="px-2 text-primary-100">Page size:</span>
          {[10, 20, 50, 100].map((size) => (
            <Button
              key={size}
              active={size === pageSize}
              onClick={() => setPageSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
        <Pagination
          currentPage={page}
          itemsPerPage={pageSize}
          totalItems={totalItems}
          onPageChange={setPage}
        />
      </div>
      <div className="mt-3 overflow-auto flex-1">
        <ListViewComponent items={loading ? [] : items} fields={fields} />
        {loading ? (
          <div className="flex flex-1 h-full justify-center items-center">
            <LoaderSpinner />
          </div>
        ) : null}
      </div>
      <div className="flex flex-row items-right justify-between">
        <div className="flex flex-row rounded-md items-center mr-5 bg-primary-500">
          <span className="px-2 text-primary-100">Page size:</span>
          {[10, 20, 50, 100].map((size) => (
            <Button
              key={size}
              active={size === pageSize}
              onClick={() => setPageSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
        <Pagination
          currentPage={page}
          itemsPerPage={pageSize}
          totalItems={totalItems}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}

export default CrudListPage;
