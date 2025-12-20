import React from "react";

const TrustedBy = ({ isDark }) => {
  // 1. Data logo disimpan dalam variabel (Array of Objects)
  const brands = [
    { name: "Adobe", src: "/assets/images/logos/adobe.svg" },
    { name: "Upwork", src: "/assets/images/logos/upwork.svg" },
    { name: "Zoom", src: "/assets/images/logos/zoom.svg" },
    { name: "Postman", src: "/assets/images/logos/postman.svg" },
    { name: "Databricks", src: "/assets/images/logos/databricks.svg" },
    { name: "Airbnb", src: "/assets/images/logos/airbnb.svg" },
    { name: "Dropbox", src: "/assets/images/logos/dropbox.svg" },
    { name: "PayPal", src: "/assets/images/logos/paypal.svg" },
    { name: "Netflix", src: "/assets/images/logos/netflix.svg" },
  ];

  // Duplikasi data untuk animasi looping yang mulus
  const allBrands = [...brands, ...brands];

  return (
    <section
      className={`w-full py-12 relative overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gray-100"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 text-center relative">
        <h2
          className={`text-lg font-semibold mb-10 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Trusted by Global Innovators & Leading Brands
        </h2>

        {/* Wrapper Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Track bergerak */}
          <div className="flex items-center gap-12 animate-scroll-slow whitespace-nowrap w-max">
            {allBrands.map((brand, index) => (
              <img
                key={index}
                src={brand.src}
                alt={brand.name}
                className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300 inline-block cursor-pointer opacity-70 hover:opacity-100"
              />
            ))}
          </div>

          {/* Efek blur gradasi kiri dan kanan */}
          <div
            className={`absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r pointer-events-none z-10 ${
              isDark ? "from-black" : "from-gray-100"
            } to-transparent`}
          />

          <div
            className={`absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l pointer-events-none z-10 ${
              isDark ? "from-black" : "from-gray-100"
            } to-transparent`}
          />
        </div>
      </div>

      {/* Inlining Style untuk animasi (Bisa dipindah ke index.css) */}
      <style>{`
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          display: flex;
          animation: scroll-slow 30s linear infinite;
        }
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
