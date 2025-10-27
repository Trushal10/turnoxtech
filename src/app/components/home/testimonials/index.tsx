"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { testimonials } from "@/lib/data/pageData";

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-[#05071b] text-white py-24">
      {/* Border Line */}
      <div className="absolute top-0 right-1/4 translate-x-1/2 w-1/2 border-t border-yellow-400 border-[2px]"></div>

      {/* Background Text */}
      <h1 className="absolute inset-0 flex justify-center items-start text-outline text-[120px] md:text-[200px] lg:text-[280px] font-extrabold uppercase text-white opacity-[0.04] tracking-[0.2em] select-none z-0">
        Feedback
      </h1>

      {/* Glow effects */}
      <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#a855f7] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#22d3ee] rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest mb-3">
            Client Feedback
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto md:text-lg leading-8 capitalize">
            Discover what our clients think about our work. Their satisfaction fuels our drive to deliver outstanding digital solutions every time.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((item, i) => (
            <div key={i} className="px-4">
              <div className="bg-[#0b0e2c] p-8 rounded-2xl border border-white/5 hover:border-primary transition-all duration-300 shadow-lg shadow-black/20">
                <Icon
                  icon="mdi:format-quote-open"
                  className="w-10 h-10 text-primary/40 mb-5"
                />
                <p className="text-white/80 mb-8 leading-relaxed italic">
                  “{item.message}”
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={55}
                    height={55}
                    className="rounded-full object-cover border border-primary/50"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{item.name}</h4>
                    <p className="text-lightpurple text-sm">{item.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
