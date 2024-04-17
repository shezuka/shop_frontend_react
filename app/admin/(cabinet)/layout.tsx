"use client";

import React from "react";
import adminAuthorized from "@/app/_lib/AdminAuthorized";
import AdminHeader from "@/app/_components/AdminHeader";
import Button from "@/app/_components/Button";
import { DeleteAccessToken } from "@/app/_lib/UserToken";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/_components/Sidebar/Sidebar";
import SidebarButton from "@/app/_components/Sidebar/SidebarButton";
import Link from "next/link";

function AdminCabinetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();

  const onLogout = () => {
    DeleteAccessToken();
    router.push("/admin/login");
  };

  return (
    <div className="overflow-hidden flex flex-col absolute top-0 bottom-0 right-0 left-0">
      <AdminHeader>
        <div className="flex justify-between justify-items-center">
          <h2 className="text-lg">Admin</h2>
          <div className="flex flex-row">
            <Link
              className="ml-2 p-2 bg-primary-950 rounded-md hover:bg-primary-800 transition-all"
              href={"/"}
            >
              Home page
            </Link>
            <Button variant="secondary" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      </AdminHeader>
      <div className="relative flex flex-1 flex-row overflow-hidden">
        <div className="overflow-auto">
          <Sidebar>
            <SidebarButton link="/admin/dashboard">Dashboard</SidebarButton>
            <SidebarButton link="/admin/products">Products</SidebarButton>
            <SidebarButton link="/admin/categories">Categories</SidebarButton>
            <SidebarButton link="/admin/companies">Companies</SidebarButton>
          </Sidebar>
        </div>
        <div className="overflow-auto w-full p-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
}

export default adminAuthorized(AdminCabinetLayout);
