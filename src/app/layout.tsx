"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");
  return (
    <html lang="en" className={theme}>
      <body className={inter.className}>
        <Header theme={theme} setTheme={setTheme} />
        {children}
      </body>
    </html>
  );
}
