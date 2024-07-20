import type { Metadata } from "next";
import { bellefair, barlow, barlow_condensed } from "@/app/lib/fonts";
import "@/app/globals.css";

import NavBar from "./ui/layout/nav-bar";

export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${bellefair.variable} ${barlow_condensed.variable} ${barlow.variable} bg-very-dark-navy text-lg leading-normal`}>
            <NavBar />
            {children}
      </body>
    </html>
  );
}
