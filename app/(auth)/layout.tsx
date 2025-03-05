// app/login/layout.tsx
"use client";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="bg-white h-screen">
      {children}
    </body>
  </html>
  );
}
