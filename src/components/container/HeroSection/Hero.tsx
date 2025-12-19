import { ArrowRight } from "lucide-react";
import React from "react";

const Hero = ({ isDark }) => {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isDark ? "bg-[#0B0B0E]" : "bg-white"
      }`}
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Your Tech Partner for{" "}
                <span className="text-[#FF6A00]">Smarter Growth</span>
              </h1>
              <p
                className={`text-lg max-w-xl ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We transform your ideas into powerful digital solutions that
                drive business growth and deliver exceptional user experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-[#FF6A00] hover:bg-[#FF7A10] text-white rounded-full font-medium transition-all duration-200 hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a> 
            </div>
          </div>

          {/* Right Image - 100% Container */}
          <div className="relative w-full h-full flex justify-center md:justify-end items-center p-0 m-0">
            {/* Enhanced blend for light mode: radial gradient background */}
            {isDark ? (
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  filter: 'blur(32px)',
                  background: 'rgba(11,11,14,0.35)',
                  borderRadius: '0',
                }}
              />
            ) : (
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 60% 50%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.6) 85%, rgba(255,255,255,0.0) 100%)',
                  filter: 'blur(8px)',
                  borderRadius: '0',
                  transition: 'background 0.5s',
                }}
              />
            )}
            <img
              src={
                isDark
                  ? "/assets/images/hero-dark.png"
                  : "/assets/images/hero-light.png"
              }
              alt="Hero Preview"
              className="w-full h-full object-cover relative z-10"
              style={{ background: 'transparent', borderRadius: '0', width: '100%', height: '100%', display: 'block', margin: 0, padding: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
