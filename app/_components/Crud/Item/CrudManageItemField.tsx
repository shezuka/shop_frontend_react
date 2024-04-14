"use client";

import React from "react";
import { CrudEditItemFieldPropsType } from "@/app/_components/Crud/types";
import InputField from "@/app/_components/InputField";

function CrudManageItemField({
  field,
  item,
  onFieldChange,
}: CrudEditItemFieldPropsType) {
  let value = item[field.name];
  if (field.editable === false) {
    if (value === undefined || value === null) return null;

    if (field.type === "boolean") value = value ? "true" : "false";
    else if (field.type === "datetime")
      value = new Date(value).toLocaleString();

    return (
      <div>
        <span className="text-bold">{field.label}:</span> <span>{value}</span>
      </div>
    );
  }

  let InputElement = InputField;
  let inputType = "text";
  let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    onFieldChange(field.name, e.target.value);

  if (field.type === "string") {
    value = typeof value === "string" ? value : "";
  } else if (field.type === "number") {
    value = typeof value === "number" ? value : 0;
    inputHandler = (e) => onFieldChange(field.name, parseInt(e.target.value));
  } else if (field.type === "boolean") {
    value = typeof value === "boolean" ? value : false;
    inputHandler = (e) => onFieldChange(field.name, e.target.checked);
  } else if (field.type === "datetime") {
    value =
      typeof value === "string"
        ? new Date(value).toLocaleString()
        : new Date().toLocaleString();
  }

  return (
    <InputElement
      label={field.label}
      type={inputType}
      value={value}
      onChange={inputHandler}
    />
  );
}

export default CrudManageItemField;
