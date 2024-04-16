import React from "react";

export default function PageTitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <h1 className="text-3xl mb-3 font-bold">{children}</h1>;
}
