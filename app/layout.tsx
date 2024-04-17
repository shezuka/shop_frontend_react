import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary-100`}>
        <div>{children}</div>
        <div
          id="modals-root"
          className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none"
        />
      </body>
    </html>
  );
}
