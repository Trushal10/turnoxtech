"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/lib/data/pageData";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#05071b] text-white py-24"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 right-1/4 translate-x-1/2 w-1/2 border-t border-yellow-400 border-[2px]"></div>

      {/* Background Glow */}
      <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#a855f7] rounded-full blur-[140px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#22d3ee] rounded-full blur-[140px] opacity-30 animate-pulse"></div>

      {/* Background Title */}
      <h1 className="absolute inset-0 flex justify-center items-start text-outline text-[120px] md:text-[200px] lg:text-[280px] font-extrabold uppercase text-white opacity-[0.04] tracking-[0.2em] select-none z-0">
        Projects
      </h1>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest mb-3">
            Our Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our <span className="text-primary">Creative Projects</span>
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto md:text-lg leading-8">
            A glimpse into our crafted web, app, and custom software solutions
            that combine innovation, design, and performance — built to deliver
            real results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {portfolioData.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-[#0b0e2c]/50 border border-white/5 backdrop-blur-md shadow-lg shadow-black/20 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-4">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white text-2xl shadow-md hover:scale-110 transition-transform duration-300"
                >
                  &rarr;
                </Link>
                <h3 className="mt-6 text-xl font-semibold text-white text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-1/2 border-t border-yellow-400 border-[2px]"></div>
      </div>
    </section>
  );
};

export default PortfolioSection;
