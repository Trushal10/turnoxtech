import Image from "next/image";
// import { getImagePath } from "@/utils/getImagePath";

export const About = () => {
  return (
    <div className="bg-body-bg md:pt-0 pt-12">
      <div className="container p-6 lg:pt-44 pt-16">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left: Image */}
          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start mb-8 lg:mb-0">
            {/* Uncomment and use your images when available */}
            <Image
              src={"/images/about-img.webp"}
              alt="About Trunox"
              width={500}
              height={400}
              className="rounded-xl"
            />
          </div>

          {/* Right: Content */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-6">
            <h2 className="font-semibold text-center sm:text-start max-w-96 leading-14">
              About Trunox
            </h2>
            <p className="lg:text-lg font-normal text-lightblue text-center sm:text-start">
              Trunox is a full-service IT company specializing in custom web, mobile, and desktop
              solutions. We help businesses scale by building secure, high-performance, and
              future-ready digital products tailored to each client’s needs.
            </p>
            <p className="lg:text-lg font-normal text-lightblue text-center sm:text-start">
              Our expert team of developers, designers, and strategists work collaboratively to
              deliver innovative solutions — from E-commerce platforms and ERP systems to
              custom web applications and ongoing maintenance services.
            </p>
          </div>
        </div>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 text-center md:text-left">
          <div className="bg-darkmode p-6 rounded-xl shadow-mentor-shadow">
            <h2 className="text-white text-xl font-semibold mb-2">Our Mission</h2>
            <p className="lg:text-lg font-normal text-lightblue text-center sm:text-start">
              To empower businesses with cutting-edge digital solutions that enhance
              growth, streamline operations, and deliver exceptional user experiences.
            </p>
          </div>
          <div className="bg-darkmode p-6 rounded-xl shadow-mentor-shadow">
            <h2 className="text-white text-xl font-semibold mb-2">Our Vision</h2>
            <p className="lg:text-lg font-normal text-lightblue text-center sm:text-start">
              To become a globally trusted IT partner, recognized for innovative solutions,
              technical excellence, and long-term client success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
