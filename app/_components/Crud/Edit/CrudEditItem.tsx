"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import axios from "@/app/_utils/axios";
import PageTitle from "@/app/_components/PageTitle";
import LoaderSpinner from "@/app/_components/Loader/LoaderSpinner";
import Button from "@/app/_components/Button";
import { CrudEditItemPropsType } from "@/app/_components/Crud/types";
import CrudManageItem from "@/app/_components/Crud/Item/CrudManageItem";

function CrudEditItem(props: CrudEditItemPropsType) {
  const router = useRouter();
  const [errors, setErrors] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [itemData, setItemData] = React.useState({});

  const onSubmit = React.useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setErrors([]);
      axios
        .put(`${props.editItemApiUrl}/${props.itemId}`, itemData)
        .then(() => {
          router.push(props.onSuccessRedirectUri);
        })
        .catch((e) => {
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
      props.itemId,
      props.fields,
      props.editItemApiUrl,
      props.onSuccessRedirectUri,
      itemData,
      router,
    ],
  );

  React.useEffect(() => {
    let cancel = false;
    setLoading(true);
    axios.get(`${props.getItemApiUrl}/${props.itemId}`).then((res) => {
      if (cancel) return;
      setItemData(res.data);
      setLoading(false);
    });

    return () => {
      cancel = true;
    };
  }, [props.itemId, props.getItemApiUrl]);

  return (
    <>
      <PageTitle>
        {props.pageTitle} ({props.itemId})
      </PageTitle>
      {loading ? (
        <div className="h-full flex justify-center items-center">
          <LoaderSpinner />
        </div>
      ) : (
        <form className="h-full" onSubmit={onSubmit}>
          {errors.map((it) => (
            <div key={it} className="text-red-500">
              {it}
            </div>
          ))}
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
            <Button type="submit">Save item</Button>
          </div>
        </form>
      )}
    </>
  );
}

export default CrudEditItem;
