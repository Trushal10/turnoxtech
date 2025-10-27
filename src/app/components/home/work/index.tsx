"use client";
import { workdata } from "@/lib/data/pageData";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const Work = () => {
  return (
    <section className="relative bg-[#05071b] text-white py-24 overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-1/2 border-t border-yellow-400 border-[2px]"></div>
      <h1 className="absolute inset-0 flex justify-center items-start text-outline text-[120px] md:text-[200px] lg:text-[280px] font-extrabold uppercase text-white opacity-[0.04] tracking-[0.2em] select-none z-0">
        Work Process
      </h1>

       {/* Soft glow blobs */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] bg-[#a855f7] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#22d3ee] rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest mb-3">
              Work Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto md:text-lg leading-8 capitalize">
            Getting started with Trunox Tech is simple — share your project goals,
            collaborate with our expert team, and watch your ideas evolve into
            powerful digital solutions that drive growth and success.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {workdata?.map((item, i) => (
            <div
              key={i}
              className="relative group bg-[#0b0d27] border border-white/10 hover:border-primary transition-all duration-500 rounded-2xl p-8 hover:scale-105 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.5)]"
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-primary/40">
                <span className="text-primary text-xl font-bold">{i + 1}</span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mt-8 mb-6">
                 <div className="p-5 bg-white/5 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                  <Icon icon={item.icon} className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-center mb-3">
                {item.heading}
              </h3>
              <p className="text-white/60 text-center text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {item.subheading}
              </p>

              {/* Connecting Line (only visible on desktop for middle cards) */}
              {i < workdata.length - 1 && (
                <div className="hidden lg:block absolute right-[-40px] top-1/2 w-20 h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
