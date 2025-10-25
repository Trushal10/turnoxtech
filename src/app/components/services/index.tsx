"use client";
import {ServicesData } from "@/lib/data/pageData";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services-section" className="scroll-mt-20 pt-48">
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
          <div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-4 -right-1/4">
              {ServicesData?.map((items, i) => (
                <div
                  className="bg-darkmode p-8 rounded-lg flex flex-col gap-3"
                  key={i}
                >
                  <div className="rounded-full bg-linear-to-r from-primary to-secondary w-fit p-4 flex items-center justify-center">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={60}
                      height={60}
                    />
                  </div>
                  <h5 className="text-white/80 text-lg font-medium capitalize">
                    {items.heading}
                  </h5>
                  <p className="text-white/40 text-sm font-normal">
                    {items.subheading}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
