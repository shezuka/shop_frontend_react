import React from "react";
import CrudEditItem from "@/app/_components/Crud/Edit/CrudEditItem";
import { ProductFields } from "@/app/_types/Product";

function ProductPage({ params }: Readonly<{ params: { product_id: string } }>) {
  return (
    <CrudEditItem
      itemId={parseInt(params.product_id)}
      pageTitle={"Edit product"}
      fields={ProductFields}
      getItemApiUrl={"/admin/products"}
      editItemApiUrl={"/admin/products"}
      onSuccessRedirectUri={"/admin/products"}
    />
  );
}

export default ProductPage;
