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
    name: "title",
    type: "string",
    label: "Title",
  },
];

function CategoriesPage() {
  return <ModelViewPage apiUri="/categories" fields={fields} />;
}

export default CategoriesPage;
