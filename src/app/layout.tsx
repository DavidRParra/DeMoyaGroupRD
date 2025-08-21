import type { Metadata } from "next";
import {Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SocialMedia from "@/components/SocialMedia";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "De Moya Group RD",
  description: "Sitio web oficial de De Moya Group RD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ES">
      <body
        className={roboto.className}
      >

        <SocialMedia />

        <NavBar/>

        {children}

        <Footer />
      </body>
    </html>
  );
}
