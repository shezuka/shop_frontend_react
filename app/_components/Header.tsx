import React from "react";

function Header({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-primary-950 py-2 px-4 text-primary-50 text-bold">
      {children}
    </div>
  );
}

export default Header;
