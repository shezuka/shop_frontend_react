"use client";

import React, { FormEvent } from "react";
import { CrudCreateItemPropsType } from "@/app/_components/Crud/types";
import PageTitle from "@/app/_components/PageTitle";
import Button from "@/app/_components/Button";
import CrudManageItem from "@/app/_components/Crud/Item/CrudManageItem";
import LoaderSpinner from "@/app/_components/Loader/LoaderSpinner";
import axios from "@/app/_utils/axios";
import { useRouter } from "next/navigation";

function CrudCreateItem(props: CrudCreateItemPropsType) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [itemData, setItemData] = React.useState({});

  const onSubmit = React.useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);
      axios
        .post(props.createItemApiUrl, itemData)
        .then(() => {
          router.push(props.onSuccessRedirectUri);
        })
        .catch((e) => {
          console.error(e);
          setLoading(false);
        });
    },
    [props.createItemApiUrl, props.onSuccessRedirectUri, itemData, router],
  );

  return (
    <>
      <PageTitle>{props.pageTitle}</PageTitle>
      {loading ? (
        <div className="h-full flex justify-center items-center">
          <LoaderSpinner />
        </div>
      ) : (
        <form className="h-full" onSubmit={onSubmit}>
          <div className="flex flex-col h-full">
            <div className="flex-1 my-2">
              <CrudManageItem
                item={itemData}
                fields={props.fields}
                onFieldChange={(fieldName, newValue) =>
                  setItemData({
                    ...itemData,
                    [fieldName]: newValue,
                  })
                }
              />
            </div>
            <Button type="submit">Create item</Button>
          </div>
        </form>
      )}
    </>
  );
}

export default CrudCreateItem;
