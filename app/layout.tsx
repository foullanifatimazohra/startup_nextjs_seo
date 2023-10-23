"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <meta key="ogType" name="og:type" content="website" />
      </head>

      <body className={inter.className}>
        {pathname.includes("contact") ? null : <Navbar />}
        {children}
        {pathname.includes("contact") ? null : <Footer />}
      </body>
    </html>
  );
}
