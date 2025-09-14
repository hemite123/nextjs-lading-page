import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsLoader from "@/Component/JSLoader";
import PageLoader from "next/dist/client/page-loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stevane Tanzil",
  description: "Fashion Designer Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/loader.css"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased index-page`} 
      >
        {children}
        <JsLoader />
      </body>
    </html>
  );
}
