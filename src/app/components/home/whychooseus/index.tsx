"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

const whyChooseUsData = [
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Innovative Solutions",
    desc: "We leverage the latest technologies to craft creative, scalable, and future-ready web & app solutions.",
  },
  {
    icon: "mdi:shield-check-outline",
    title: "Quality & Reliability",
    desc: "Every project undergoes rigorous testing and optimization to ensure unmatched quality and performance.",
  },
  {
    icon: "mdi:headset",
    title: "24/7 Expert Support",
    desc: "Our dedicated support team is available round the clock to assist you through every step of the journey.",
  },
  {
    icon: "mdi:account-group-outline",
    title: "Experienced Team",
    desc: "A passionate team of developers, designers, and strategists committed to driving your digital success.",
  },
  {
    icon: "mdi:lock-check-outline",
    title: "Security & Scalability",
    desc: "We build with security-first principles and ensure your solutions grow seamlessly with your business.",
  },
  {
    icon: "mdi:clock-check-outline",
    title: "On-Time Delivery",
    desc: "We deliver projects on schedule without compromising on creativity, quality, or technical precision.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#05071b] text-white py-24 overflow-hidden">
      <h1 className="absolute inset-0 flex justify-center items-start text-outline text-[120px] md:text-[200px] lg:text-[280px] font-extrabold uppercase text-white opacity-[0.04] tracking-[0.2em] select-none z-0">
        Trunox Tech
      </h1>
      {/* Glowing background effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/30 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[140px]" />

      {/* Border lines */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-1/2 border-t border-yellow-400 opacity-60 border-[2px]"></div>

      <div className="container relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-2">
            Why Choose Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Why Businesses Trust <span className="text-primary">Trunox Tech</span>
          </h2>
          <p className="text-lightpurple max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
            We combine innovation, expertise, and dedication to deliver world-class
            software and digital experiences that empower businesses to achieve more.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#0b0f2b] hover:bg-[#11163a] transition-all duration-500 rounded-2xl p-8 shadow-lg border border-transparent hover:border-yellow-400 group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 mb-6 mx-auto md:mx-0 group-hover:bg-yellow-400/20 transition">
                <Icon
                  icon={item.icon}
                  className="text-yellow-400 text-4xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center md:text-left">
                {item.title}
              </h3>
              <p className="text-lightpurple text-center md:text-left leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
