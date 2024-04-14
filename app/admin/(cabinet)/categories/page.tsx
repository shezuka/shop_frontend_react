import React from "react";
import CrudListPage from "@/app/_components/Crud/List/CrudListPage";
import { CrudItemFieldType } from "@/app/_components/Crud/types";

const CategoriesFields: CrudItemFieldType[] = [
  {
    name: "title",
    label: "Title",
    type: "string",
  },
  {
    name: "created_at",
    label: "Created at",
    type: "datetime",
  },
  {
    name: "updated_at",
    label: "Updated at",
    type: "datetime",
  },
];

function CategoriesPage() {
  return (
    <CrudListPage
      pageTitle={"Categories"}
      fields={CategoriesFields}
      itemsApiUrl="/admin/categories"
    />
  );
}

export default CategoriesPage;
