import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/shared/ScrollToTop";
import RouteTransition from "./components/shared/RouteTransition";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const SITE_URL = "https://trunoxtech.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TrunoxTech — Building AI-Powered Software, SaaS & Business Automation",
    template: "%s | TrunoxTech",
  },
  description:
    "TrunoxTech is an AI-first product engineering studio. We design and build AI software, SaaS platforms, custom applications and business automation that ship fast and scale cleanly.",
  applicationName: "TrunoxTech",
  keywords: [
    "AI development company",
    "SaaS development",
    "custom software development",
    "business automation",
    "AI agents",
    "web development",
    "mobile app development",
    "API integration",
    "cloud solutions",
    "TrunoxTech",
  ],
  authors: [{ name: "TrunoxTech", url: SITE_URL }],
  creator: "TrunoxTech",
  publisher: "TrunoxTech",
  alternates: { canonical: "/" },
  // Icons come from the app-directory file convention:
  // src/app/favicon.ico, icon.png, apple-icon.png
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "TrunoxTech",
    title: "TrunoxTech — Building AI-Powered Software, SaaS & Business Automation",
    description:
      "An AI-first product engineering studio building software, SaaS platforms and automation for teams that need to move fast.",
    images: [
      {
        url: "/images/logo/trunox-og.png",
        width: 1200,
        height: 630,
        alt: "TrunoxTech — AI-powered software engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrunoxTech — Building AI-Powered Software, SaaS & Business Automation",
    description:
      "An AI-first product engineering studio building software, SaaS platforms and automation for teams that need to move fast.",
    images: ["/images/logo/trunox-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TrunoxTech",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/trunoxtech-logo.png`,
  description:
    "AI-first product engineering studio building AI software, SaaS platforms, custom applications and business automation.",
  email: "trunoxtech@gmail.com",
  telephone: "+91-9979036226",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bopal (CT)",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380058",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/trunoxtech",
    "https://github.com/trunoxtech",
    "https://twitter.com/trunoxtech",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-canvas font-sans text-ink antialiased">
        {/* Scroll reveals start at opacity 0 and are shown by an
            IntersectionObserver — without JS that observer never runs, so
            force everything visible. */}
        <noscript>
          <style>{`.reveal,.reveal-group .reveal-item{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <a href="#main" className="sr-only-focusable">
          Skip to content
        </a>

        <Header />
        <RouteTransition>
          <main id="main">{children}</main>
        </RouteTransition>
        <Footer />
        <ScrollToTop />

        <script
          type="application/ld+json"
          // Structured data is static and author-controlled.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
