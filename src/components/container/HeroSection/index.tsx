import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = ({ isDark }) => {
  // Gunakan warna #050505 agar benar-benar menyatu dengan background gambar gelap
  const bgColor = isDark ? "bg-[#050505]" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const subTextColor = isDark ? "text-gray-400" : "text-gray-600";

  return (
    <section 
      id="home" 
      className={`relative w-full min-h-screen ${bgColor} overflow-hidden flex items-center transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] ${textColor}`}>
                Your Tech Partner for{" "}
                <span className="text-[#FF6A00] block">Smarter Growth</span>
              </h1>
              <p className={`text-lg md:text-xl max-w-lg leading-relaxed ${subTextColor}`}>
                We deliver tailored IT solutions to help you scale with speed and confidence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
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

      {/* Right Image - Mentok Kanan & Sangat Besar */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] pointer-events-none overflow-hidden">
        <div className="relative h-full w-full">
          <img
            src={isDark ? "/assets/images/hero-dark.png" : "/assets/images/hero-light.png"}
            alt="Hero Illustration"
            className="h-full w-full object-contain object-right scale-110 lg:scale-125 translate-x-[5%]"
          />
          
          {/* Gradient Masking: Menghilangkan garis kotak gambar di sisi kiri */}
          <div className={`absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r ${
            isDark ? "from-[#050505] via-[#050505]/50" : "from-white via-white/50"
          } to-transparent z-10`} />
        </div>
      </div>

      {/* Glow Ambient tambahan agar lebih dramatis */}
      <div className={`absolute -right-20 top-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none ${
        isDark ? "bg-[#FF6A00]" : "bg-[#FF6A00]/40"
      }`} />
    </section>
  );
};

export default Hero;