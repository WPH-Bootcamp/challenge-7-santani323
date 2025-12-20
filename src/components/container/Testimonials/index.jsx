import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Lee",
      role: "Director at Innovate Corp",
      text: "A game-changer for our project. They turned it into reality efficiently and effectively.",
      image: "https://i.pravatar.cc/150?u=john", // Ganti dengan path gambar asli
    },
    {
      name: "Sarah Tan",
      role: "Product Manager at Finovate",
      text: "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
      image: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      name: "Emily Chen",
      role: "Marketing Head at TechUp",
      text: "The collaboration was seamless, exceeding all our expectations. Their expertise truly made our project a successful reality.",
      image: "https://i.pravatar.cc/150?u=emily",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const getPosition = (index) => {
    if (index === activeIndex) return "active";
    if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) return "left";
    if (index === (activeIndex + 1) % testimonials.length) return "right";
    return "hidden";
  };

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Partners Say About Working With Us
          </h2>
          <p className="text-gray-400 text-lg tracking-wide">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* SLIDER CONTAINER */}
        <div className="relative flex justify-center items-center h-[500px]">
          {testimonials.map((item, index) => {
            const position = getPosition(index);
            const isActive = position === "active";

            return (
              <div
                key={index}
                className={`
                  absolute transition-all duration-700 ease-in-out
                  ${isActive ? "z-30 scale-100 opacity-100" : "z-10 scale-90 opacity-20 blur-[2px]"}
                  ${position === "left" ? "-translate-x-[450px]" : ""}
                  ${position === "right" ? "translate-x-[450px]" : ""}
                  ${position === "hidden" ? "opacity-0 pointer-events-none" : ""}
                `}
              >
                <div className="relative group">
                  {/* CARD */}
                  <div className={`
                    w-[500px] rounded-[2rem] p-12 transition-colors duration-500
                    ${isActive ? "bg-[#0B0D11] border border-gray-800/50" : "bg-[#0B0D11]/50"}
                  `}>
                    
                    {/* QUOTE ICON (SVG PERSIS GAMBAR) */}
                    <div className="absolute -top-6 left-10">
                      <svg width="60" height="45" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 56V26.88C0 18.6667 2.14667 12.1333 6.44 7.28C10.8267 2.42667 16.9867 0 24.92 0V11.2C20.6267 11.2 17.5467 12.32 15.68 14.56C13.8133 16.8 12.88 19.9733 12.88 24.08H25.76V56H0ZM47.04 56V26.88C47.04 18.6667 49.1867 12.1333 53.48 7.28C57.8667 2.42667 64.0267 0 71.96 0V11.2C67.6667 11.2 64.5867 12.32 62.72 14.56C60.8533 16.8 59.92 19.9733 59.92 24.08H72.8V56H47.04Z" fill="#C84B31"/>
                      </svg>
                    </div>

                    {/* STARS */}
                    <div className="flex justify-center gap-1.5 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#FFB547] text-[#FFB547]" />
                      ))}
                    </div>

                    {/* TEXT */}
                    <p className="text-white text-center text-xl leading-relaxed font-light mb-12 italic">
                      “{item.text}”
                    </p>

                    {/* AUTHOR INFO */}
                    <div className="text-center">
                      <p className="text-white font-semibold text-lg tracking-wide">
                        {item.name}
                      </p>
                      <p className="text-[#C84B31] text-sm mt-1 uppercase tracking-widest font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* FLOATING IMAGE (MUNCUL HANYA SAAT AKTIF) */}
                  <div className={`
                    absolute -bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-300
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  `}>
                    <div className="w-20 h-20 rounded-full border-4 border-black overflow-hidden shadow-xl shadow-black/50">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DOTS (SAMA SEPERTI DI GAMBAR) */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "bg-[#C84B31] w-8 h-2.5"
                  : "bg-gray-800 w-2.5 h-2.5 hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;