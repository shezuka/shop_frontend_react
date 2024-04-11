"use client";

import React from "react";
import adminAuthorized from "@/app/_lib/AdminAuthorized";

function AdminCabinetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

export default adminAuthorized(AdminCabinetLayout);
