import { About } from "@/app/components/about/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Trunox Tech",
  description:
    "At Trunox Tech, we turn creative ideas into digital reality. We specialize in web development, software solutions, and app design that help startups and businesses grow through innovation and technology.",
  keywords: [
    "Trunox Tech",
    "IT company",
    "web development",
    "software development",
    "app development",
    "digital solutions",
    "startup technology",
  ],
  openGraph: {
    title: "About Us | Trunox Tech",
    description:
      "Learn about Trunox Tech — your trusted technology partner for custom web, software, and app solutions.",
    url: "https://trunoxtech.com/about",
    siteName: "Trunox Tech",
    images: [
      {
        url: "/images/trunox-og.png", // replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Trunox Tech - About Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Trunox Tech",
    description:
      "At Trunox Tech, we build innovative digital products — from web apps to custom software.",
    images: ["/images/trunox-og.png"], // same image as OpenGraph
  },
};


export default function Page() {
    return (
        <>
            <About />
        </>
    );
};