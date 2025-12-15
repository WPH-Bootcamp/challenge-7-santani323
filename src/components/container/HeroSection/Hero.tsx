import React from "react";


const Hero = () => {
  return (
    <section className="w-full min-h-[80vh] bg-[#18111A] dark:bg-white bg-gradient-to-br from-[#18111A] to-[#1a191e] dark:from-white dark:to-gray-100 flex items-center py-12 md:py-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12 md:gap-0">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white dark:text-black leading-tight">
            Your Tech Partner for<br />
            <span className="text-[#FF6B3D]">Smarter Growth</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 dark:text-gray-700 max-w-xl mx-auto md:mx-0">
            We deliver tailored IT solutions to help you scale with speed and confidence.
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#FF6B3D] to-[#FF9066] text-white rounded-full font-semibold shadow-lg hover:from-[#ff7a4d] hover:to-[#ffb088] transition text-base md:text-lg">Let's Talk</button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <img src="/hero-image.png" alt="Company Hero" className="max-w-xs md:max-w-md lg:max-w-lg w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
