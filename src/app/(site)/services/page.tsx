
import Services from "@/app/components/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Trunox Tech",
  icons: {
    icon: "/images/logo/favicon.ico",
  },
  description:
    "Get in touch with Trunox Tech — your trusted partner for web development, software solutions, and app design. We're here to help your business grow with innovative technology.",
  keywords: [
    "Trunox Tech",
    "contact",
    "IT company",
    "web development",
    "software solutions",
    "app development",
    "digital solutions",
  ],
  openGraph: {
    title: "Services | Trunox Tech",
    description:
      "Reach out to Trunox Tech for web, software, and app solutions that drive your business forward.",
    url: "https://trunoxtech.com/contact",
    siteName: "Trunox Tech",
    images: [
      {
        url: "/images/trunox-contact-og.png", // replace with your actual image
        width: 1200,
        height: 630,
        alt: "Contact Trunox Tech",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Trunox Tech",
    description:
      "Get in touch with Trunox Tech for custom web, software, and app solutions.",
    images: ["/images/trunox-contact-og.png"], // same as OpenGraph image
  },
};


export default function Page() {
    return (
        <>
          <Services />
        </>
    );
};