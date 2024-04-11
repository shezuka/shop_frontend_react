import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="m-auto sm:max-w-full md:max-w-md lg:max-w-md flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {children}
    </div>
  );
}
