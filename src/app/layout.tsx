"use client";

import { useState, useEffect, ReactNode } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Aoscompo from "@/lib/utils/aos";
import ScrollToTop from "./components/scroll-to-top";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Cursor from "./components/shared/Cursor";
import PreLoader from "./components/shared/PreLoader";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

// ✅ Define type for props
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        {loading ? (
          <PreLoader />
        ) : (
          <Aoscompo>
            <Header />
            {children}
            <Cursor />
            <Footer />
          </Aoscompo>
        )}
        <ScrollToTop />
      </body>
    </html>
  );
}
