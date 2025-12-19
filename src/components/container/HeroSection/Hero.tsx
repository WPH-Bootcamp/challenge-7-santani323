import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B0E]"
    >
      {/* Gradient Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6A00] opacity-20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Your Tech Partner for{" "}
                <span className="text-[#FF6A00]">Smarter Growth</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-xl">
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
              <a
                href="#services"
                className="inline-flex items-center px-8 py-3 border-2 border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00] hover:text-white rounded-full font-medium transition-all duration-200"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right Content - Auto Light/Dark */}
          <picture className="mx-auto">
            <source
              srcSet="/assets/images/hero-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="/assets/images/hero-light.png"
              alt="Hero Preview"
              className="w-72 h-[600px] object-contain rounded-[3rem] shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
