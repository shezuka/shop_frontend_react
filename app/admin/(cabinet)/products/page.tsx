import React from "react";
import CrudListPage from "@/app/_components/Crud/List/CrudListPage";
import { ProductFields } from "@/app/_types/Product";

function ProductsPage() {
  return (
    <CrudListPage
      pageTitle={"Products"}
      fields={ProductFields}
      itemsApiUrl="/admin/products"
      deleteUri="/admin/products"
      create
      edit
    />
  );
}

export default ProductsPage;
