import React from "react";
import StoreHeaderSearch from "@/app/_components/StoreHeader/StoreHeaderSearch";

function StoreHeader() {
  return (
    <div className="p-2 bg-primary-950 text-primary-100">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl mr-2">Dihordev</h1>
        <StoreHeaderSearch />
      </div>
    </div>
  );
}

export default StoreHeader;
