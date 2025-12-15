import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B0E] dark:bg-[#0B0B0E]">
      {/* Gradient Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6A00] opacity-20 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Your Tech Partner for{' '}
                <span className="text-[#FF6A00]">Smarter Growth</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-xl">
                We transform your ideas into powerful digital solutions that drive business growth and deliver exceptional user experiences.
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
              <a
                href="#services"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00] hover:text-white rounded-full font-medium transition-all duration-200"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right Content - Mobile Mockup */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-72 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              {/* Phone screen */}
              <div className="w-full h-full bg-[#0B0B0E] rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                <div className="text-center space-y-4 p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-2xl mx-auto flex items-center justify-center">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-700 rounded w-3/4 mx-auto"></div>
                    <div className="h-3 bg-gray-700 rounded w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#0B0B0E] rounded-full"></div>
            </div>
            {/* Floating glow effect */}
            <div className="absolute -z-10 w-96 h-96 bg-[#FF6A00] opacity-30 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;