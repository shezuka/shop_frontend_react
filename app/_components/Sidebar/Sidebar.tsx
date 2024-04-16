import React from "react";

type SidebarPropsType = Readonly<{
  bgColor?: "light" | "dark";
  children?: React.ReactNode;
  className?: string;
}>;

function Sidebar({ children, className, bgColor = "dark" }: SidebarPropsType) {
  const classes = ["min-h-full", "overflow-auto", className];

  classes.push(bgColor === "dark" ? "bg-primary-950" : "bg-primary-100");

  return <div className={classes.join(" ")}>{children}</div>;
}

export default Sidebar;
