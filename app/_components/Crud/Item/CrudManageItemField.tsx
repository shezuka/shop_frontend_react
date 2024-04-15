"use client";

import React from "react";
import { CrudEditItemFieldPropsType } from "@/app/_components/Crud/types";
import InputField from "@/app/_components/InputField";
import AssetUploader from "@/app/_components/AssetUploader";
import { Input } from "postcss";
import TextArea from "@/app/_components/TextArea";
import ApiAutocomplete from "@/app/_components/ApiAutocomplete";

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

  let InputElement: any = InputField;
  let inputType = "text";
  let accept = "image/png,image/jpeg,image/jpg";
  let additionalProps: any = {};
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
  } else if (field.type === "image") {
    InputElement = AssetUploader;
    inputHandler = (newImageId) => onFieldChange(field.name, newImageId);
  } else if (field.type === "text") {
    InputElement = TextArea;
  } else if (field.type === "reference") {
    InputElement = ApiAutocomplete;
    inputHandler = (newReferenceId) =>
      onFieldChange(field.name, newReferenceId);
    additionalProps = field.referenceOptions;
    additionalProps.exceptIds = [];
    if (item.id) additionalProps.exceptIds.push(item.id);
  }

  return (
    <div className="my-1">
      <InputElement
        label={field.label}
        type={inputType}
        value={value}
        onChange={inputHandler}
        accept={accept}
        showImage
        removable
        {...additionalProps}
      />
    </div>
  );
}

export default CrudManageItemField;
