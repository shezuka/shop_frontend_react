import React from "react";
import { CrudListItemFieldPropsType } from "@/app/_components/Crud/types";
import axios from "@/app/_utils/axios";

function CrudListItemField({ item, field }: CrudListItemFieldPropsType) {
  if (field.type === "boolean") {
    return item[field.name] ? "true" : "false";
  } else if (field.type === "string" || field.type === "number") {
    return item[field.name];
  } else if (field.type === "datetime") {
    return new Date(item[field.name]).toLocaleString();
  } else if (field.type === "image") {
    if (!item[field.name]) return null;
    return (
      <img
        className="w-32"
        src={`${axios.defaults.baseURL}/assets/${item[field.name]}`}
      />
    );
  }

  return null;
}

export default CrudListItemField;
