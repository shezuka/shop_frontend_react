"use client";

import React from "react";
import Image from "next/image";
import HomeSectionTitle from "@/app/_components/Home/SectionTitle";
import { ProductType } from "@/app/_types/Product";
import TopProductsData from "@/app/_components/Product/TopProductsData";
import ProductCard from "@/app/_components/Product/ProductCard";
import { useRouter } from "next/navigation";
import SiteLinks from "@/app/_data/SiteLinks";
import Link from "next/link";
import HomeMenu from "@/app/_components/Home/HomeMenu";

function HomePage() {
  const router = useRouter();

  return (
    <div className="relative">
      <Image
        alt="Main logo"
        width={1972}
        height={1024}
        src="/assets/images/home-page-logo.webp"
      />
      <div
        className="absolute left-0 right-0 flex flex-row justify-center"
        style={{ top: "10%" }}
      >
        <div className="relative">
          <div className="relative z-10">
            <HomeMenu />
          </div>
        </div>
      </div>
      <div
        className="absolute w-full bg-primary-100 py-2 px-3 md:py-3 md:px-5 lg:py-5 lg:px-30"
        style={{ top: "90%" }}
      >
        <HomeSectionTitle>TOP VIEWS</HomeSectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <TopProductsData>
            {(topProducts) =>
              topProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => router.push(`/products/${product.id}`)}
                />
              ))
            }
          </TopProductsData>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
