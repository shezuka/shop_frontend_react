import React from "react";
import { CrudListItemFieldPropsType } from "@/app/_components/Crud/types";

function CrudListItemTextField({ item, field }: CrudListItemFieldPropsType) {
  if (field.type === "boolean") {
    return item[field.name] ? "true" : "false";
  } else if (field.type === "string" || field.type === "number") {
    return item[field.name];
  } else if (field.type === "datetime") {
    return new Date(item[field.name]).toLocaleString();
  }

  return null;
}

export default CrudListItemTextField;
