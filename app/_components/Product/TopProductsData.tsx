"use client";

import React from "react";
import { ProductType } from "@/app/_types/Product";
import axios from "@/app/_utils/axios";

function TopProductsData({
  children,
}: Readonly<{ children: (topProducts: ProductType[]) => React.ReactNode }>) {
  const [topProducts, setTopProducts] = React.useState<ProductType[]>([]);

  React.useEffect(() => {
    let cancel = false;
    axios.get("/products").then((resp) => {
      if (cancel) return;
      setTopProducts(resp.data);
    });

    return () => {
      cancel = true;
    };
  }, []);

  return children(topProducts);
}

export default TopProductsData;
