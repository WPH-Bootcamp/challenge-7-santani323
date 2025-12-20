import { ArrowRight } from "lucide-react";
import React from "react";

const Hero = ({ isDark }) => {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#030303]" : "bg-gray-50"
      }`}
    >
      {/* Background Glow Effect - Menyebar luas di belakang gambar */}
      <div 
        className={`absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none ${
          isDark ? "bg-[#FF6A00]" : "bg-[#FF6A00]/40"
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Your Tech Partner for{" "}
                <span className="text-[#FF6A00] block md:inline">Smarter Growth</span>
              </h1>
              <p
                className={`text-lg md:text-xl max-w-lg leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We deliver tailored IT solutions to help you scale with speed and
                confidence.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-10 py-4 bg-[#FF6A00] hover:bg-[#FF7A10] text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-[#FF6A00]/30"
              >
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Visual - Full Screen Style */}
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[800px] flex items-center justify-center lg:justify-end">
            <div className="relative w-full h-full scale-110 lg:scale-125 transition-transform duration-1000 animate-in zoom-in">
              <img
                src={
                  isDark
                    ? "/assets/images/hero-dark.png" 
                    : "/assets/images/hero-light.png"
                }
                alt="3D Tech Visualization"
                className="w-full h-full object-contain object-center lg:object-right drop-shadow-[0_35px_35px_rgba(255,106,0,0.15)]"
              />
              
              {/* Overlay Gradient agar menyatu dengan background gelap */}
              {isDark && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-transparent pointer-events-none hidden lg:block" />
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className={`absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t pointer-events-none ${
        isDark ? "from-[#030303]" : "from-white"
      } to-transparent`} />
    </section>
  );
};

export default Hero;