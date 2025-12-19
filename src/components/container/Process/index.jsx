const steps = [
  {
    title: "Discovery & Consultation",
    desc: "Understand Your Needs & Goals",
  },
  {
    title: "Planning & Strategy",
    desc: "Build a Clear, Scalable Roadmap",
  },
  {
    title: "Design & Prototyping",
    desc: "Craft UX That Converts",
  },
  {
    title: "Development & Implementation",
    desc: "Deliver With Speed & Precision",
  },
  {
    title: "Testing & Optimization",
    desc: "Ensure Quality at Every Step",
  },
  {
    title: "Launch & Growth",
    desc: "Scale, Measure & Improve Continuously",
  },
];

const Process = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white py-16 px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        Our Process
      </h2>
      <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
        Clear steps. Smart execution. Results you can count on.
      </p>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Timeline line (desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-800 -translate-x-1/2 rounded-full" />

        <div className="flex flex-col gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative w-full">
              {/* ================= DESKTOP ================= */}
              <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center">
                {/* LEFT CARD */}
                <div className="flex justify-end pr-8">
                  {idx % 2 === 0 && <Card step={step} />}
                </div>

                {/* NUMBER CENTER */}
                <StepNumber index={idx} />

                {/* RIGHT CARD */}
                <div className="flex justify-start pl-8">
                  {idx % 2 === 1 && <Card step={step} />}
                </div>
              </div>

              {/* ================= MOBILE ================= */}
              <div className="md:hidden flex items-start gap-4">
                {/* NUMBER LEFT */}
                <StepNumber index={idx} />

                {/* CARD */}
                <div className="flex-1">
                  <Card step={step} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= NUMBER COMPONENT ================= */
const StepNumber = ({ index }) => (
  <div
    className="
      w-10 h-10 md:w-12 md:h-12
      aspect-square
      shrink-0
      grid place-items-center
      rounded-full
      bg-[#FF5A1F]
      text-white
      font-bold
      text-sm md:text-lg
      leading-none
      border-4 border-black
      shadow-lg
      z-10
    "
  >
    {index + 1}
  </div>
);

/* ================= CARD ================= */
const Card = ({ step }) => (
  <div className="bg-[#15171C] rounded-xl shadow-lg px-6 py-5 max-w-md w-full">
    <div className="font-semibold text-base md:text-lg mb-1">
      {step.title}
    </div>
    <div className="text-gray-400 text-sm md:text-base">
      {step.desc}
    </div>
  </div>
);

export default Process;
