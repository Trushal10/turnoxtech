import { Metadata } from "next";
import Banner from "./components/home/hero";
import Work from "./components/home/work";
import Services from "./components/home/services";
import Simple from "./components/home/simple";
import { About } from "./components/home/about";
import WhyChooseUs from "./components/home/whychooseus";
import Testimonials from "./components/home/testimonials";

export const metadata: Metadata = {
  title: "Trunox Tech - Innovative Web, App & Software Solutions",
  description:
    "Trunox Tech is a digital innovation company specializing in custom websites, mobile apps, and software solutions. We help startups and enterprises scale with secure, high-performance, and future-ready digital products.",
  icons: {
    icon: "/images/logo/favicon.ico",
  },
  keywords: [
    "Trunox Tech",
    "web development",
    "software development",
    "app development",
    "digital solutions",
    "startup technology",
    "enterprise solutions",
  ],
  openGraph: {
    title: "Trunox Tech - Innovative Web, App & Software Solutions",
    description:
      "Trunox Tech delivers custom websites, apps, and software solutions to help startups and enterprises grow with cutting-edge technology.",
    url: "https://trunoxtech.com",
    siteName: "Trunox Tech",
    images: [
      {
        url: "/images/logo/trunox-og.png",
        width: 1200,
        height: 630,
        alt: "Trunox Tech",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trunox Tech - Innovative Web, App & Software Solutions",
    description:
      "Trunox Tech delivers custom websites, apps, and software solutions to help startups and enterprises grow with cutting-edge technology.",
    images: ["/images/logo/trunox-og.png"],
  },
};


export default function Home() {
  return (
    <main>
      <Banner/>
      <Services />
      <About />
      <Work />
      <Simple />
      < WhyChooseUs />
      < Testimonials />
    </main>
  );
}
