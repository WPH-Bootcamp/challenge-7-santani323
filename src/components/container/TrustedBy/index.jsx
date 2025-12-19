import React from "react";

const TrustedBy = ({ isDark }) => {
  const companies = [
    { name: "Company A", logo: "A" },
    { name: "Company B", logo: "B" },
    { name: "Company C", logo: "C" },
    { name: "Company D", logo: "D" },
    { name: "Company E", logo: "E" },
    { name: "Company F", logo: "F" },
  ];

  return (
    <section className={isDark ? "py-16 bg-[#0B0B0E]" : "py-16 bg-white"}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            Trusted By
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Leading Brands Worldwide
          </h2>
        </div>

        {/* Slider Container */}

        <div className="relative overflow-hidden rounded-2xl">
          {/* LEFT BLUR */}
          <div
            className={
              "pointer-events-none absolute left-0 top-0 z-10 h-full w-24 backdrop-blur-sm " +
              (isDark
                ? "bg-gradient-to-r from-[#0B0B0E] via-[#0B0B0E]/80 to-transparent"
                : "bg-gradient-to-r from-white via-white/80 to-transparent")
            }
          />

          {/* RIGHT BLUR */}
          <div
            className={
              "pointer-events-none absolute right-0 top-0 z-10 h-full w-24 backdrop-blur-sm " +
              (isDark
                ? "bg-gradient-to-l from-[#0B0B0E] via-[#0B0B0E]/80 to-transparent"
                : "bg-gradient-to-l from-white via-white/80 to-transparent")
            }
          />

          {/* Slider */}
          <div className="flex gap-8 py-4 animate-trusted-slider">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-24 bg-[#121216] rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 group-hover:from-[#FF6A00] group-hover:to-[#FF8C00] rounded-lg flex items-center justify-center transition-all duration-300">
                  <span className="text-white font-bold text-2xl">
                    {company.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes trusted-slider {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-trusted-slider {
            animation: trusted-slider 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TrustedBy;
