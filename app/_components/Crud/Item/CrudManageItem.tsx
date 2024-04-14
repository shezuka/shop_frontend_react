"use client";

import React from "react";
import { CrudManageItemPropsType } from "@/app/_components/Crud/types";
import CrudManageItemField from "@/app/_components/Crud/Item/CrudManageItemField";

function CrudManageItem(props: CrudManageItemPropsType) {
  return (
    <>
      {props.fields.map((field) => (
        <CrudManageItemField
          key={field.name}
          item={props.item}
          field={field}
          onFieldChange={props.onFieldChange}
        />
      ))}
    </>
  );
}

export default CrudManageItem;
