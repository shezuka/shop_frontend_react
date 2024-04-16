"use client";

import React from "react";
import ApiAutocomplete from "@/app/_components/ApiAutocomplete";
import { useRouter } from "next/navigation";

function StoreHeaderSearch() {
  const router = useRouter();
  const [searchValue, setSearchValue] = React.useState(null);

  const onAutocompleteValueChange = (newAssetId: number | null) => {
    if (typeof newAssetId !== "number" || isNaN(newAssetId)) return;
    router.push(`/products/${newAssetId}`);
  };

  return (
    <ApiAutocomplete
      className="rounded-xl ring-0 border-0 focus:border-0 focus:ring-0 focus:outline-none flex-1 w-full shadow-none"
      placeholder="Search products"
      onChange={onAutocompleteValueChange}
      searchApi="/products"
      labelFieldName="name"
      value={searchValue}
    />
  );
}

export default StoreHeaderSearch;
