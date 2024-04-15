"use client";

import React, { FormEvent } from "react";
import { CrudCreateItemPropsType } from "@/app/_components/Crud/types";
import PageTitle from "@/app/_components/PageTitle";
import Button from "@/app/_components/Button";
import CrudManageItem from "@/app/_components/Crud/Item/CrudManageItem";
import LoaderSpinner from "@/app/_components/Loader/LoaderSpinner";
import axios from "@/app/_utils/axios";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

function CrudCreateItem(props: CrudCreateItemPropsType) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [itemData, setItemData] = React.useState({});
  const [errors, setErrors] = React.useState<any[]>([]);

  const onSubmit = React.useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);
      axios
        .post(props.createItemApiUrl, itemData)
        .then(() => {
          router.push(props.onSuccessRedirectUri);
          setErrors([]);
        })
        .catch((e: AxiosError) => {
          console.error(e);
          setLoading(false);
          if (e.response) {
            if (e.response.status === 400) {
              const data = e.response.data as any;
              setErrors([data.message]);
            } else if (e.response.status === 422) {
              let data = e.response.data as any;
              data = data.detail.map((error: any) => {
                const fieldName = error.loc[error.loc.length - 1];
                const fieldData = props.fields.find(
                  (it) => it.name === fieldName,
                );
                return `${fieldData?.label}: ${error.msg}`;
              });
              setErrors(data);
            }
          }
        });
    },
    [
      props.fields,
      props.createItemApiUrl,
      props.onSuccessRedirectUri,
      itemData,
      router,
    ],
  );

  return (
    <>
      <PageTitle>{props.pageTitle}</PageTitle>
      {errors.map((it) => (
        <div key={it} className="text-red-500">
          {it}
        </div>
      ))}
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
