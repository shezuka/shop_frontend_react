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

function CrudListPage({
  pageTitle,
  fields,
  itemsApiUrl,
  listViewComponent,
}: Readonly<{
  pageTitle: string;
  fields: CrudItemFieldType[];
  itemsApiUrl: string;
  listViewComponent?: (props: CrudListViewPropsType) => React.ReactElement;
}>) {
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [totalItems, setTotalItems] = React.useState(0);

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
      })
      .finally(() => {
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
      <h1 className="text-3xl mb-3">{pageTitle}</h1>
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
