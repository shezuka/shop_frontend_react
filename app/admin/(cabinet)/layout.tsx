"use client";

import React from "react";
import adminAuthorized from "@/app/_lib/AdminAuthorized";
import Header from "@/app/_components/Header";
import Button from "@/app/_components/Button";
import { DeleteAccessToken } from "@/app/_lib/UserToken";
import { useRouter } from "next/navigation";

function AdminCabinetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();

  const onLogout = () => {
    DeleteAccessToken();
    router.push("/admin/login");
  };

  return (
    <>
      <Header>
        <div className="flex justify-between justify-items-center">
          <h2 className="text-lg">Admin</h2>
          <Button variant="secondary" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </Header>
    </>
  );
}

export default adminAuthorized(AdminCabinetLayout);
