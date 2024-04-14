import React from "react";
import CrudCreateItem from "@/app/_components/Crud/Create/CrudCreateItem";
import { CategoryFields } from "@/app/_types/Category";

function CategoryCreatePage() {
  return (
    <CrudCreateItem
      pageTitle={"Create category"}
      fields={CategoryFields}
      createItemApiUrl="/admin/categories"
      onSuccessRedirectUri="/admin/categories"
    />
  );
}

export default CategoryCreatePage;
