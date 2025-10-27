"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { getImagePath } from "@/lib/utils/imagePath";

const Simple = () => {
  const stats = [
    { label: "Happy Clients", value: 120 },
    { label: "Projects Delivered", value: 50 },
    { label: "Completed Milestones", value: 80 },
    { label: "Client Rating", value: 5 },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#05071b] text-white py-24 "
    >
      <div className="absolute top-0 right-1/4 translate-x-1/2 w-1/2 border-t border-yellow-400 border-[2px]"></div>
      <h1 className="absolute inset-0 flex justify-center items-start text-outline text-[120px] md:text-[200px] lg:text-[280px] font-extrabold uppercase text-white opacity-[0.04] tracking-[0.2em] select-none z-0">
        Worldwide
      </h1>
      {/* Soft glow blobs */}
      <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#a855f7] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#22d3ee] rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        <p className="text-primary font-semibold uppercase tracking-widest mb-3">
          Our Achievements
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Trusted by Businesses <span className="text-primary">Worldwide</span>
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed mb-16">
          From startups to enterprises, Trunox Tech delivers innovative, high-performance digital
          solutions that inspire growth and trust - across the globe.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center relative group"
            >
              {/* Divider line except last */}
              {idx !== stats.length - 1 && (
                <span className="hidden sm:block absolute right-0 top-1/2 w-px h-12 bg-white/10 translate-y-[-50%]" />
              )}

              {/* Number */}
              <p className="text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition-transform duration-300">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.2}
                    suffix={stat.label === "Client Rating" ? "★" : "+"}
                  />
                ) : (
                  "0"
                )}
              </p>

              {/* Label */}
              <p className="text-white/70 text-lg font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Simple;
