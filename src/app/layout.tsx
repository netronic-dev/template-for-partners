import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Icons } from "@/components/Icons";
import { Header } from "@/components/Header";
import { StoreProvider } from "@/store/StoreProvider";
import { Footer } from "@/components/Footer";

const manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.woff2",
  variable: "--font-manrope",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Laser tag template for partners",
  description: "Laser tag template for partners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${manrope.variable} antialiased`}>
          <Icons />
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
