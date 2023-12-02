import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
const inter = Montserrat({ subsets: ["cyrillic"] });

import Navigation from "@/ui/Navigation";
import Footer from "@/ui/Footer";
import MiniAddBanner from "@/ui/MiniAddBanner";

export const metadata: Metadata = {
  title: "Modimal. A Place for Women.",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main text-titleColor m-auto`}>
        <MiniAddBanner>enjoy free shipping on all orders</MiniAddBanner>

        <Navigation />
        <main className="m-auto w-full h-screenHeight max-w-screen-2xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
