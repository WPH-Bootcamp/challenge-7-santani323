import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = ({ isDark }) => {
  // Warna latar belakang yang sangat spesifik agar menyatu dengan aset gambar
  const bgColor = isDark ? "bg-[#050505]" : "bg-[#fcfcfc]";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const subTextColor = isDark ? "text-gray-400" : "text-gray-600";

  return (
    <section 
      id="home" 
      className={`relative w-full min-h-screen ${bgColor} overflow-hidden flex flex-col lg:flex-row items-center transition-colors duration-500 pt-20 lg:pt-0`}
    >
      {/* Container Konten Utama */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Teks di atas pada mobile */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000 relative z-40 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] ${textColor}`}>
                Your Tech Partner for{" "}
                <span className="text-[#FF6A00] block md:inline lg:block">Smarter Growth</span>
              </h1>
              <p className={`text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed ${subTextColor}`}>
                We deliver tailored IT solutions to help you scale with speed and confidence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center px-10 py-4 bg-[#FF6A00] hover:bg-[#FF7A10] text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-[#FF6A00]/20"
              >
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Area Gambar - Responsif: Relative di mobile, Absolute di Desktop */}
      <div className="relative lg:absolute right-0 bottom-0 w-full lg:w-[70%] h-[400px] md:h-[500px] lg:h-full z-10 pointer-events-none mt-10 lg:mt-0">
        <div className="relative h-full w-full flex justify-center lg:justify-end items-center">
          
          {/* Masking Gradient - Menghilangkan Garis/Batas Gambar */}
          <div className={`absolute inset-0 z-20 bg-gradient-to-b lg:bg-gradient-to-r 
            ${isDark 
              ? "from-[#050505] via-[#050505]/40 to-transparent" 
              : "from-[#fcfcfc] via-[#fcfcfc]/40 to-transparent"
            } h-1/2 lg:h-full w-full lg:w-3/4 top-0 lg:left-0`} 
          />

          <img
            src={isDark ? "/assets/images/hero-dark.png" : "/assets/images/hero-light.png"}
            alt="Hero Illustration"
            className="h-full w-full object-contain object-bottom lg:object-right scale-110 md:scale-100 lg:scale-150 translate-y-4 lg:translate-y-0 lg:translate-x-[10%] select-none"
          />
        </div>
      </div>

      {/* Decorative Glow Ambient */}
      <div className={`absolute right-0 top-1/2 lg:top-1/4 -translate-y-1/2 lg:translate-y-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[100px] md:blur-[160px] opacity-20 pointer-events-none z-0 ${
        isDark ? "bg-[#FF6A00]" : "bg-[#FF6A00]/40"
      }`} />
    </section>
  );
};

export default Hero;