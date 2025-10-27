"use client";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#05071b] text-white overflow-hidden pt-36">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10 blur-3xl"></div>

      {/* Glowing Circle Behind Illustration */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-primary to-secondary rounded-full blur-[150px] opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <Image
          src="/images/404.svg"
          alt="404 Illustration"
          width={400}
          height={400}
          className="mx-auto mb-8 animate-pulse"
        />

        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-lightpurple max-w-md mx-auto mb-8">
          Oops! The page you’re looking for doesn’t exist or may have been
          moved. Let’s get you back on track.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white py-3 px-8 rounded-xl text-lg font-medium bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300"
        >
          Go Back Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
