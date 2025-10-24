"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Simple = () => {
  const stats = [
    { label: "Clients", value: 120 },
    { label: "Projects", value: 50 },
    { label: "Completed", value: 80 },
    { label: "Rating", value: 5 },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref} // ✅ You missed adding `ref` to the section for intersection observer
      className="bg-simple-bg relative before:absolute before:w-full before:h-full before:bg-arrow-bg before:bg-no-repeat before:top-10"
    >
      <div className="container relative z-10 py-20">
        {/* Heading Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-semibold mb-6 sm:leading-16 capitalize">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-center text-lightpurple text-lg font-normal mb-8">
            We help startups, enterprises, and innovators achieve their digital goals with secure,
            scalable, and high-performance IT solutions — from websites and apps to ERP and custom
            software.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <p className="text-white text-4xl sm:text-5xl font-bold mb-2">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    suffix={stat.label === "Rating" ? "★" : "+"} // ⭐ nicer suffix
                  />
                ) : (
                  "0"
                )}
              </p>
              <p className="text-lightpurple text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Simple;
