import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Lee",
      role: "CTO at Innovate Corp",
      text: "A game-changer for our project. They turned it into reality efficiently.",
    },
    {
      name: "Sarah Tan",
      role: "Product Manager at Finovate",
      text: "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
    },
    {
      name: "Emily Chen",
      role: "Marketing Head at ScaleUp",
      text: "The collaboration was seamless. Their expertise truly made our campaign successful.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getPosition = (index) => {
    if (index === activeIndex) return "active";
    if (index === (activeIndex - 1 + testimonials.length) % testimonials.length)
      return "left";
    if (index === (activeIndex + 1) % testimonials.length)
      return "right";
    return "hidden";
  };

  return (
    <section className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Partners Say About Working With Us
          </h2>
          <p className="text-gray-400 text-sm">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative flex justify-center items-center h-[420px]">

          {testimonials.map((item, index) => {
            const position = getPosition(index);
            const isActive = position === "active";

            return (
              <div
                key={index}
                className={`
                  absolute transition-all duration-700 ease-in-out
                  ${position === "active" && "z-20 scale-105 opacity-100"}
                  ${position === "left" && "-translate-x-[420px] opacity-30 blur-[1px]"}
                  ${position === "right" && "translate-x-[420px] opacity-30 blur-[1px]"}
                  ${position === "hidden" && "opacity-0 pointer-events-none"}
                `}
              >
                <div className="relative w-[520px] rounded-3xl p-12 bg-[#0f1115] shadow-2xl">

                  {/* ✅ QUOTE — FIXED POSITION */}
                  {isActive && (
                    <div className="absolute top-6 left-8 flex z-10">
                      <span className="text-[#FF6A00] text-[64px] leading-none font-bold">“</span>
                      <span className="text-[#FF6A00] text-[64px] leading-none font-bold -ml-3">”</span>
                    </div>
                  )}

                  {/* STARS */}
                  <div className="flex justify-center gap-1 mt-10 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#FFB547] text-[#FFB547]"
                      />
                    ))}
                  </div>

                  {/* TEXT */}
                  <p className="text-white text-center text-lg leading-relaxed mb-10">
                    “{item.text}”
                  </p>

                  {/* AUTHOR */}
                  <div className="text-center">
                    <p className="text-white font-medium text-base">
                      {item.name}
                    </p>
                    <p className="text-[#FF6A00] text-sm mt-1">
                      {item.role}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "bg-[#FF6A00] w-6 h-2"
                  : "bg-gray-600 w-2 h-2"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
