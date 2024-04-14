import React from "react";
import CrudListPage from "@/app/_components/Crud/List/CrudListPage";
import { CategoryFields } from "@/app/_types/Category";

function CategoriesPage() {
  return (
    <CrudListPage
      pageTitle={"Categories"}
      fields={CategoryFields}
      itemsApiUrl="/admin/categories"
      create
      edit
    />
  );
}

export default CategoriesPage;
