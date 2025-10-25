"use client";
import {ServicesData } from "@/lib/data/pageData";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services-section" className="scroll-mt-20">
      <div className="container relative">
        <div className="bg-linear-to-r from-primary to-secondary absolute w-full h-full top-0 -left-1/4 blur-390"></div>
        <div className=" gap-x-4 gap-y-4 relative z-10">
          {/* Column-1 */}
          <div className="mb-10">
            <p className="text-primary text-base sm:text-lg font-semibold mb-4 text-center">
              SERVICES
            </p>
            <h2 className="font-semibold mb-6 text-center max-w-5xl mx-auto sm:leading-14 capitalize">
              Empowering Businesses with Modern Web Development Solutions
            </h2>
            <p className="lg:text-lg font-normal text-lightpurple text-center max-w-5xl mx-auto">
              From Laravel and Node.js development to E-commerce, ERP, and custom web applications —
              we deliver powerful, scalable, and secure digital solutions tailored to your business.
              Whether you need a new website or ongoing maintenance, our expert team ensures your online
              success with innovation and precision.
            </p>
          </div>
          {/* Column-2 */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              {ServicesData?.slice(0, 3).map((items, i) => (
                <div
                  key={i}
                  className="bg-darkmode p-8 rounded-2xl flex flex-col gap-4 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="rounded-full bg-linear-to-r from-primary to-secondary w-fit p-4 flex items-center justify-center">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={60}
                      height={60}
                    />
                  </div>
                  <h5 className="text-white/90 text-lg font-semibold capitalize">
                    {items.heading}
                  </h5>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {items.subheading}
                  </p>
                </div>
              ))}
            </div>

            {/* View All Services Link */}
            <div className="flex justify-end mt-10">
              <Link
                href="/services"
                className="font-semibold text-white py-3 px-5 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl mr-6 cursor-pointer"
              >
                View All Services
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
