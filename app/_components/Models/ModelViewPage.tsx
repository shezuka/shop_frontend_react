"use client";

import { CrudItemFieldType } from "@/app/_components/Crud/types";
import CrudDataGetter from "@/app/_components/CrudDataGetter";
import React from "react";
import LoaderSpinner from "@/app/_components/Loader/LoaderSpinner";
import ModelDataView from "@/app/_components/Models/ModelDataView";
import { useRouter } from "next/navigation";

type ModelsViewPagePropsType = {
  apiUri: string;
  fields: CrudItemFieldType[];
  onClickRedirectUri?: string;
};

function ModelViewPage(props: ModelsViewPagePropsType) {
  const router = useRouter();

  function onItemClick(item: any) {
    if (!props.onClickRedirectUri) return;
    router.push(`${props.onClickRedirectUri}/${item.id}`);
  }

  return (
    <CrudDataGetter apiUri={props.apiUri} offset={0} limit={10}>
      {(value) =>
        !value ? (
          <div className="flex justify-center items-center h-full">
            <LoaderSpinner />
          </div>
        ) : (
          <div className="w-full">
            <ModelDataView
              value={value}
              onItemClick={props.onClickRedirectUri ? onItemClick : undefined}
              fields={props.fields}
            />
          </div>
        )
      }
    </CrudDataGetter>
  );
}

export default ModelViewPage;
