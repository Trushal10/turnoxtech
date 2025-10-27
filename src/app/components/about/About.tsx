import Image from "next/image";

export const About = () => {
  return (
    <section className="relative bg-[#05071b] text-white overflow-hidden py-24">
      {/* Decorative background */}
      <div className="absolute inset-0">
        {/* Large transparent TRUNOX text */}
        <h1 className="absolute inset-0 flex justify-center items-start text-outline text-[120px] md:text-[200px] lg:text-[280px] font-extrabold uppercase text-white opacity-[0.04] tracking-[0.2em] select-none z-0 pt-32">
          TRUNOX
        </h1>

        {/* Soft glowing blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[140px]"></div>
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-1/2 border-t border-yellow-400 opacity-60"></div>
      <div className="absolute top-0 right-1/4 translate-x-1/2 w-1/2 border-t border-yellow-400 opacity-60"></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center pt-36">
          {/* Left: Image */}
          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl blur-2xl opacity-30"></div>
              <Image
                src={"/images/about-img.webp"}
                alt="About Trunox"
                width={500}
                height={400}
                className="relative z-10"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold">
              About Us
            </p>
            <h2 className="font-bold text-4xl sm:text-5xl leading-tight">
              Building Future-Ready Digital Experiences with <span className="text-primary">Trunox</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Trunox is a full-service IT company specializing in custom web, mobile, and desktop
              solutions. We help businesses scale by building secure, high-performance, and
              future-ready digital products tailored to each client’s needs.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Our expert team of developers, designers, and strategists works collaboratively to
              deliver innovative solutions — from E-commerce platforms and ERP systems to
              custom web applications and ongoing maintenance services.
            </p>
          </div>
        </div>

        {/* Mission / Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-24">
          <div className="bg-[#0a0c24] p-8 rounded-xl border border-white/10 hover:border-primary transition-all duration-300 shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-primary">Our Mission</h3>
            <p className="text-gray-300 text-lg mb-6">
              To empower businesses with cutting-edge digital solutions that enhance
              growth, streamline operations, and deliver exceptional user experiences.
            </p>
          </div>
          <div className="bg-[#0a0c24] p-8 rounded-xl border border-white/10 hover:border-secondary transition-all duration-300 shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-primary">Our Vision</h3>
            <p className="text-gray-300 text-lg mb-6">
              To become a globally trusted IT partner, recognized for innovative solutions,
              technical excellence, and long-term client success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
