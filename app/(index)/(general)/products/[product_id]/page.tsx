"use client";

import React from "react";
import ProductDataFetch from "@/app/_components/ProductDataFetch";
import Card from "@/app/_components/Card";
import axios from "@/app/_utils/axios";
import LoaderSpinner from "@/app/_components/Loader/LoaderSpinner";

type ProductPagePropsType = Readonly<{
  params: {
    product_id: string;
  };
}>;

const ProductPage = ({ params }: ProductPagePropsType) => {
  return (
    <ProductDataFetch productId={parseInt(params.product_id)}>
      {(productData) =>
        productData ? (
          // Product data view
          <>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col md:w-1/3 lg:w-1/4">
                <div>
                  <img
                    className="w-full"
                    src={`${axios.defaults.baseURL}/assets/${productData.image_id}`}
                  />
                </div>
              </div>
              <div className="flex-1 ml-0 md:ml-2">
                <div>
                  <h1 className="font-bold text-primary-100 p-2 bg-primary-900">
                    {productData.name}
                  </h1>
                </div>
                <div className="bg-primary-200 shadow-md mt-2">
                  <h2 className="bg-primary-600 font-bold p-2 text-primary-200">
                    Description
                  </h2>
                  <p className="p-2 whitespace-pre-line">
                    {productData.description}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Loading product data view
          <div className="flex flex-row justify-center items-center w-full h-full">
            <LoaderSpinner />
          </div>
        )
      }
    </ProductDataFetch>
  );
};

export default ProductPage;
