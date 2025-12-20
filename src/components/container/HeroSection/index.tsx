import React from "react";

const Hero = ({ isDark }) => {
  return (
    <section className="relative w-full min-h-screen bg-gray-50 dark:bg-black overflow-hidden flex flex-col md:flex-row">
      {/* Left Content */}
      <div className="flex-1 flex items-center justify-center md:justify-start px-6 md:px-16 py-12 md:py-0">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Selamat Datang di Website Kami
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg md:text-xl">
            Kami menghadirkan solusi kreatif dan inovatif untuk pengembangan web
            dan desain digital.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#about"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow hover:opacity-90 transition"
            >
              Pelajari Lebih Lanjut
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative w-full h-64 md:h-auto">
        <img
          src={
            isDark
              ? "/assets/images/hero-dark.png"
              : "/assets/images/hero-light.png"
          }
          alt="Hero Illustration"
          className="h-full w-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-l from-transparent to-gray-50 dark:to-black" />
      </div>
    </section>
  );
};

export default Hero;
