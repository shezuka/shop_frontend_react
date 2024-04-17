import React from "react";
import Sidebar from "@/app/_components/Sidebar/Sidebar";
import SidebarButton from "@/app/_components/Sidebar/SidebarButton";

function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:mb-0 h-full p-2 md:px-4 lg:px-20">
        <div className="overflow-auto mb-2 mr-0 md:mb-0 md:mr-2">
          <Sidebar bgColor="light" className="sticky top-0">
            <SidebarButton variant="primary-light" link="/">
              Home
            </SidebarButton>
          </Sidebar>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}

export default GeneralLayout;
