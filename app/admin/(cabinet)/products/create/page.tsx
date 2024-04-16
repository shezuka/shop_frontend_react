import React from "react";
import CrudCreateItem from "@/app/_components/Crud/Create/CrudCreateItem";
import { ProductFields } from "@/app/_types/Product";

function ProductCreatePage() {
  return (
    <CrudCreateItem
      pageTitle={"Create product"}
      fields={ProductFields}
      createItemApiUrl="/admin/products"
      onSuccessRedirectUri="/admin/products"
    />
  );
}

export default ProductCreatePage;
