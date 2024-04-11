"use client";

import { redirect, useRouter } from "next/navigation";
import checkAdminToken from "@/app/_lib/checkAdminToken";
import React from "react";

export default function AdminPage() {
  const router = useRouter();

  React.useEffect(() => {
    let cancel = false;
    checkAdminToken().then((isValid) => {
      if (cancel) return;
      router.push(isValid ? "/admin/dashboard" : "/admin/login");
    });

    return () => {
      cancel = true;
    };
  }, []);
  return null;
}
