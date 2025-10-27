"use client";
import { getImagePath } from "@/lib/utils/imagePath";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Companies from "../companies";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="relative overflow-hidden border-t border-yellow-400 bg-[#05071b] text-white py-24">

      {/* Soft glow blobs */}
      <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#a855f7] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#22d3ee] rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          {/* Left Column - Text */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <p className="text-yellow-400 font-semibold uppercase tracking-[0.3em] text-sm">
              Welcome to Trunox Tech
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Digital Growth <br />
              with <span className="text-primary">Trunox Tech</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0">
              Trunox Tech is a full-service IT solutions company delivering custom web, app, and
              software development that drive innovation, scalability, and transformation
              for global businesses.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-2">
              <Link href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-sm font-semibold hover:from-secondary hover:to-primary transition-all duration-500"
              >
                  <span>Contact Us</span>
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

              <button
                onClick={openModal}
                className="flex items-center gap-3 text-white hover:text-[#22d3ee] transition-all duration-300"
              >
                <Image
                  src={getImagePath('/images/banner/playbutton.svg')}
                  alt="Play button"
                  width={47}
                  height={47}
                  className="hover:scale-110 transition-transform duration-300"
                />
                <span className="font-medium">Watch Overview</span>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#22d3ee]/20 rounded-full blur-[120px]"></div> */}
              <Image
                src="/images/banner/hero-img.webp"
                alt="Trunox Hero"
                width={1100}
                height={900}
                className="relative z-10 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-[#0d1027] rounded-xl overflow-hidden shadow-lg">
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <h3 className="text-white text-lg font-semibold">How It Works</h3>
              <button onClick={closeModal} className="text-white hover:text-[#22d3ee] transition-colors">
                <Icon icon="tabler:circle-x" className="text-2xl" />
              </button>
            </div>
            <iframe
              className="w-[90vw] md:w-[50rem] h-[400px]"
              src="https://www.youtube.com/embed/xAAEiykov1w?si=7Keuu5t0oJzZ67Q-"
              title="How Our Product Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      < Companies />
    </div>
  );
};

export default Banner;
