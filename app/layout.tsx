import "./globals.css";
import React from "react";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load Montserrat with a CSS variable so Tailwind can use it via `font-sans` or the variable.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});
export const metadata = {
  title: "SafteyVoice AI",
  icons: {
    icon: "/favicon.svg", 
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${montserrat.variable} font-sans bg-background  antialiased min-h-screen`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-1 ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
