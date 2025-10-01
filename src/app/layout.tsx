import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import CartLabel from "@/components/CartLabel/CartLabel";
import AddToCartModal from "@/components/AddToCartModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Магазин техники Apple",
  description: "AJ.ru — лучший магазин техники Apple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header/>
        {children}
      <CartLabel/>
      <AddToCartModal/>
      </body>
    </html>
  );
}
