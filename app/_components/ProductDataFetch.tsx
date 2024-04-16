"use client";

import React from "react";
import { ProductType } from "@/app/_types/Product";
import axios from "@/app/_utils/axios";

type ProductDataFetchPropsType = Readonly<{
  productId: number;
  children: (productData: ProductType | null) => React.ReactNode;
}>;

function ProductDataFetch({ productId, children }: ProductDataFetchPropsType) {
  const [productData, setProductData] = React.useState<ProductType | null>(
    null,
  );

  React.useEffect(() => {
    let cancel = false;
    setProductData(null);
    axios.get(`/products/${productId}`).then((res) => {
      if (cancel) return;
      setProductData(res.data);
    });

    return () => {
      cancel = true;
    };
  }, [productId]);

  return children(productData);
}

export default ProductDataFetch;
