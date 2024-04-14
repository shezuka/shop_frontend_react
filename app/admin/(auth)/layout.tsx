import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-primary-900">
      <div className="m-auto sm:max-w-full md:max-w-md lg:max-w-md flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {children}
      </div>
    </div>
  );
}
