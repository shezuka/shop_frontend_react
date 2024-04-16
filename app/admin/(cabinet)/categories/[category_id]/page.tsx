import React from "react";
import CrudEditItem from "@/app/_components/Crud/Edit/CrudEditItem";
import { CategoryFields } from "@/app/_types/Category";

function CategoryPage({
  params,
}: Readonly<{ params: { category_id: string } }>) {
  return (
    <CrudEditItem
      itemId={parseInt(params.category_id)}
      pageTitle={"Edit category"}
      fields={CategoryFields}
      getItemApiUrl={"/admin/categories"}
      editItemApiUrl={"/admin/categories"}
      onSuccessRedirectUri={"/admin/categories"}
    />
  );
}

export default CategoryPage;
