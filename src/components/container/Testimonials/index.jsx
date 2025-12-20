import React, { useState } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

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

  return (
    <section className="py-28 bg-black overflow-hidden">
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

        {/* TESTIMONIALS */}
        <div className="relative flex justify-center items-center gap-10">

          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`
                  relative w-[360px] rounded-2xl p-8 transition-all duration-500
                  ${isActive
                    ? "bg-[#0f1115] scale-105 opacity-100 shadow-2xl"
                    : "bg-[#0f1115] opacity-30 blur-[1px]"
                  }
                `}
              >
                {/* QUOTE */}
                <div className="absolute top-6 left-6 text-[#FF6A00] text-5xl font-bold leading-none">
                  “
                </div>

                {/* STARS */}
                <div className="flex justify-center gap-1 mb-6 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FF6A00] text-[#FF6A00]"
                    />
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-gray-200 text-center text-sm leading-relaxed mb-10">
                  “{item.text}”
                </p>

                {/* FOOTER */}
                <div className="text-center">
                  <p className="text-white font-medium text-sm">
                    {item.name}
                  </p>
                  <p className="text-[#FF6A00] text-xs mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* AVATAR */}
        <div className="flex justify-center mt-12">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF6A00]">
            <img
              src="/assets/images/avatar.png"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#FF6A00]"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
