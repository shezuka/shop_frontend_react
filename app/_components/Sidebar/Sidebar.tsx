import React from "react";

function Sidebar({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <div className="min-h-full bg-primary-950 overflow-auto">{children}</div>
  );
}

export default Sidebar;
