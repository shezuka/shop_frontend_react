"use client";

import React from "react";
import Button from "@/app/_components/Button";
import { useRouter } from "next/navigation";

function SidebarButton({
  children,
  link,
  variant = "primary",
}: Readonly<{
  children?: React.ReactNode;
  link?: string;
  variant?: "primary" | "secondary" | "primary-light";
}>) {
  const router = useRouter();

  const onClick = React.useCallback(() => {
    if (!link) return;
    router.push(link);
  }, [router, link]);

  return (
    <Button
      variant={variant}
      size="lg"
      className="rounded-none"
      fullWidth
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default SidebarButton;
