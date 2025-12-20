import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const steps = [
  {
    title: "Discovery & Consultation",
    details: "Understand Your Needs & Goals. ",
  },
  {
    title: "Planning & Strategy",
    details: "Build a Clear, Scalable Roadmap.  ",
  },
  {
    title: "Design & Prototyping",
    details: "Craft UX That Converts. ",
  },
  {
    title: "Development & Implementation",
    details: "Deliver With Speed & Precision. ",
  },
  {
    title: "Testing & Optimization",
    details: "Ensure Quality at Every Step. ",
  },
  {
    title: "Launch & Growth",
    details: "Scale, Measure & Improve Continuously.  ",
  },
];

const Process = ({ isDark }) => {
  return (
    <section id="process" className={`w-full min-h-screen py-20 px-4 transition-colors duration-500 ${
      isDark ? "bg-[#050505] text-white" : "bg-gray-50 text-gray-900"
    }`}>
      {/* Heading */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our <span className="text-[#FF5A1F]">Process</span>
        </h2>
        <p className={`max-w-xl mx-auto text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Timeline line (desktop) */}
        <div className={`hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full ${
          isDark ? "bg-gray-800" : "bg-gray-200"
        }`} />

        <div className="flex flex-col gap-10 md:gap-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative w-full">
              {/* ================= DESKTOP ================= */}
              <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center">
                <div className="flex justify-end pr-12">
                  {idx % 2 === 0 && <AccordionCard step={step} isDark={isDark} index={idx} />}
                </div>

                <StepNumber index={idx} isDark={isDark} />

                <div className="flex justify-start pl-12">
                  {idx % 2 === 1 && <AccordionCard step={step} isDark={isDark} index={idx} />}
                </div>
              </div>

              {/* ================= MOBILE ================= */}
              <div className="md:hidden flex items-start gap-4">
                <StepNumber index={idx} isDark={isDark} />
                <div className="flex-1">
                  <AccordionCard step={step} isDark={isDark} index={idx} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= ACCORDION CARD COMPONENT ================= */
const AccordionCard = ({ step, isDark, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`group w-full max-w-md rounded-2xl transition-all duration-300 border cursor-pointer overflow-hidden ${
        isDark 
        ? "bg-[#111111] border-gray-800 hover:border-[#FF5A1F]/50 shadow-2xl shadow-black" 
        : "bg-white border-gray-200 hover:border-[#FF5A1F]/50 shadow-xl shadow-gray-200"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6">
        <div className="flex justify-between items-center gap-4">
          <div>
          
            <h3 className={`font-bold text-lg md:text-xl ${isDark ? "text-white" : "text-gray-900"}`}>
              {step.title}
            </h3>
          </div>
          <div className={`p-1 rounded-full transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-[#FF5A1F] text-white" : isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"
          }`}>
            <ChevronDown size={20} />
          </div>
        </div>

        {/* Details (Animated Open/Close) */}
        <div className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}>
          <div className="overflow-hidden">
            <div className={`pt-4 border-t text-sm md:text-base leading-relaxed ${
              isDark ? "border-gray-800 text-gray-400" : "border-gray-100 text-gray-600"
            }`}>
              {step.details}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= NUMBER COMPONENT ================= */
const StepNumber = ({ index, isDark }) => (
  <div
    className={`
      w-10 h-10 md:w-14 md:h-14
      aspect-square shrink-0
      grid place-items-center
      rounded-full
      bg-[#FF5A1F]
      text-white
      font-extrabold
      text-base md:text-xl
      leading-none
      border-4
      shadow-xl
      z-20
      transition-colors duration-500
      ${isDark ? "border-[#050505]" : "border-gray-50"}
    `}
  >
    {index + 1}
  </div>
);

export default Process;