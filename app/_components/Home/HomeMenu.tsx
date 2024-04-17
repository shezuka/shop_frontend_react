"use client";

import React from "react";
import SiteLinks from "@/app/_data/SiteLinks";
import Link from "next/link";
import { useRouter } from "next/navigation";

function HomeMenu() {
  const router = useRouter();

  const onClick = (it: any) => {
    router.push(it.link);
  };

  return SiteLinks.map((link, index) => (
    <button
      key={link.link}
      type="button"
      className="relative px-4 py-3 bg-transparent text-primary-100 font-bold"
      onClick={() => onClick(link.link)}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 bg-primary-300 opacity-30 hover:bg-primary-600 hover:opacity-40 ${index === 0 ? "rounded-l-md" : ""} ${index === SiteLinks.length - 1 ? "rounded-r-md" : ""}`}
      />
      {link.label}
    </button>
  ));
}

export default HomeMenu;
