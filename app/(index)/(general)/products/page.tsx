"use client";

import React from "react";
import ModelViewPage from "@/app/_components/Models/ModelViewPage";
import { CrudItemFieldType } from "@/app/_components/Crud/types";

const fields: CrudItemFieldType[] = [
  {
    name: "image_id",
    type: "image",
    label: "Image",
  },
  {
    name: "name",
    type: "text",
    label: "Name",
  },
  {
    name: "description",
    type: "text",
    label: "Description",
  },
];

function ProductsPage() {
  return (
    <ModelViewPage
      apiUri="/products"
      onClickRedirectUri="/products"
      fields={fields}
    />
  );
}

export default ProductsPage;
