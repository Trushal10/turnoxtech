import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div className="relative overflow-hidden bg-[#05071b] text-white py-24">
        <div className="absolute top-0 right-1/4 translate-x-1/2 w-1/2 border-t border-yellow-400 border-[2px]"></div>
        <h1 className="absolute inset-0 flex justify-center items-start text-outline text-[120px] md:text-[200px] lg:text-[280px] font-extrabold uppercase text-white opacity-[0.04] tracking-[0.2em] select-none z-0">
            TRUNOX
        </h1>

        {/* Soft glow blobs */}
        <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#a855f7] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#22d3ee] rounded-full blur-[120px] opacity-30 animate-pulse"></div>

        {/* Main Content */}
        <div className="container mx-auto relative z-10 grid grid-cols-12 gap-10 items-center px-6">
            {/* Left: Image */}
            <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
                <div className="relative">
                    <Image
                    src="/images/about-img.webp"
                    alt="About Trunox"
                    width={520}
                    height={420}
                    className="relative z-10"
                    />
                    {/* Badge */}
                    <div className="absolute -bottom-8 -right-8 bg-yellow-400 text-black font-semibold rounded-full py-6 px-10 shadow-lg z-20">
                    <div className="text-3xl font-bold">2K+</div>
                    <div className="text-sm font-medium">Clients</div>
                    </div>
                </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
                <p className="text-yellow-400 font-semibold uppercase tracking-widest mb-3">
                    About Trunox Technology
                </p>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                    Innovating the Future <br />
                    with Cutting-Edge <span className="text-primary">Technology.</span>
                </h2>

                <p className="text-gray-300 text-lg mb-6">
                    At <span className="font-medium text-white">Trunox Technology</span>, we build
                    powerful, scalable, and future-ready digital solutions — from web and mobile
                    applications to enterprise-grade systems.
                </p>

                <p className="text-gray-300 text-lg mb-8">
                    With our dedicated team of developers, designers, and strategists, we help
                    businesses innovate, grow, and lead in the ever-evolving digital landscape.
                </p>

                <Link href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-sm font-semibold hover:from-secondary hover:to-primary transition-all duration-500"
                >
                    <span>Learn More</span>
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
            </div>
        </div>
    </div>
  );
};
