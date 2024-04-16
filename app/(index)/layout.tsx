import React from "react";
import StoreHeader from "@/app/_components/StoreHeader/StoreHeader";
import AboutModal from "@/app/_components/AboutModal";

function IndexLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col">
        <div className="sticky top-0 z-1">
          <StoreHeader />
        </div>
        <div className="relative flex-1">{children}</div>
      </div>
      <AboutModal />
    </>
  );
}

export default IndexLayout;
