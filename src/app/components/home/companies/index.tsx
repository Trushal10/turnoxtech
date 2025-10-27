"use client";
import { Companiesdata } from "@/lib/data/pageData";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="container relative z-10">
      {/* Logo Slider */}
      <Slider {...settings} className="mt-8">
        {Companiesdata?.map((item: any, i: number) => (
          <div key={i} className="flex items-center justify-center">
            <div className="group relative flex items-center justify-center mx-auto p-6 transition-all duration-300 hover:scale-105 hover:brightness-125">
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={180}
                height={90}
                className="opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Companies;
