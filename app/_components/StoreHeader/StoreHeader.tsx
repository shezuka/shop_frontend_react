import React from "react";
import StoreHeaderSearch from "@/app/_components/StoreHeader/StoreHeaderSearch";
import Link from "next/link";

function StoreHeader() {
  return (
    <div className="p-2 bg-primary-950 text-primary-100">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl mr-2">Dihordev</h1>
        <StoreHeaderSearch />
        <Link
          href={"/admin"}
          className="ml-2 p-2 bg-primary-950 rounded-md hover:bg-primary-800 transition-all"
        >
          Admin
        </Link>
      </div>
    </div>
  );
}

export default StoreHeader;
