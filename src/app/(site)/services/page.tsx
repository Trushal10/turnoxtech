import Services from "@/app/components/services";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServicesData } from "@/lib/data/pageData";

export const metadata: Metadata = {
  title: "Services | Trunox Tech",
  description:
    "Explore Trunox Tech's professional web development, app design, and software solutions. We deliver innovative, scalable digital products tailored to your business needs.",
  keywords: [
    "Trunox Tech",
    "IT company",
    "web development",
    "software solutions",
    "app development",
    "ERP development",
    "digital transformation",
  ],
  icons: {
    icon: "/images/logo/favicon.ico",
  },
  openGraph: {
    title: "Services | Trunox Tech",
    description:
      "Discover Trunox Tech's wide range of IT and software services — from custom websites and mobile apps to enterprise software and digital transformation solutions.",
    url: "https://trunoxtech.com/services",
    siteName: "Trunox Tech",
    images: [
      {
        url: "/images/trunox-services-og.png",
        width: 1200,
        height: 630,
        alt: "Trunox Tech Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Trunox Tech",
    description:
      "Innovative web, app, and software development solutions to elevate your business — crafted by Trunox Tech.",
    images: ["/images/trunox-services-og.png"],
  },
};

export default function Page() {
  return (
    <section id="services-section" className="relative overflow-hidden  bg-[#05071b] text-white py-24">
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-1/2 border-t border-yellow-400 border-[2px]"></div>
          <h1 className="absolute inset-0 flex justify-center items-start text-[100px] md:text-[160px] lg:text-[240px] font-extrabold uppercase text-white opacity-[0.03] tracking-[0.2em] select-none z-0 pt-32">
            SERVICES
          </h1>
    
          {/* Soft glow blobs */}
          <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#a855f7] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#22d3ee] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
    
          <div className="container relative z-10 mx-auto px-6">
            {/* Heading Section */}
            <div className="text-center mb-14 pt-36">
              <p className="text-yellow-400 font-semibold uppercase tracking-widest mb-3">
                  Better Future
              </p>
    
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Explore Our<span className="text-primary"> Services</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-4xl mx-auto">
                From <span className="text-white font-medium">Website & App Development</span> to
                E-Commerce, ERP, and Custom Software — Trunox Tech delivers powerful, scalable,
                and secure solutions tailored for your business growth.
              </p>
            </div>
    
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {ServicesData?.map((items, i) => (
                <div
                  key={i}
                  className="group relative bg-[#0c0f25]/60 hover:bg-[#11152e] border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:-translate-y-2"
                >
                  <div className="rounded-full bg-white/10 group-hover:bg-pink-500/20 w-fit p-4 mb-6 transition-all duration-500">
                    <Image src={items.imgSrc} alt={items.heading} width={60} height={60} />
                  </div>
                  <h5 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-all duration-300">
                    {items.heading}
                  </h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {items.subheading}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}