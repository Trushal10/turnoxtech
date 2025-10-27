"use client";
import {ServicesData } from "@/lib/data/pageData";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services-section" className="relative overflow-hidden  bg-[#05071b] text-white py-24">
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-1/2 border-t border-yellow-400 border-[2px]"></div>
      <h1 className="absolute inset-0 flex justify-center items-start text-outline text-[120px] md:text-[200px] lg:text-[280px] font-extrabold uppercase text-white opacity-[0.04] tracking-[0.2em] select-none z-0">
        SREVICES
      </h1>

      {/* Soft glow blobs */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] bg-[#a855f7] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#22d3ee] rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-14">
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
          {ServicesData?.slice(0, 6).map((items, i) => (
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

        {/* View All Services Button */}
        <div className="flex justify-end mt-14">
          <Link href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-sm font-semibold hover:from-secondary hover:to-primary transition-all duration-500"
          >
              <span>View All Services</span>
              <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
