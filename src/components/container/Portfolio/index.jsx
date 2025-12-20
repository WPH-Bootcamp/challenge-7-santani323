import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Portofolio 1",
      category: "Landing Page",
      image: "/assets/images/porto1.png",
    },
    {
      title: "Portofolio 2",
      category: "Landing Page",
      image: "/assets/images/image215.png",
    },
    {
      title: "Portofolio 3",
      category: "Landing Page",
      image: "/assets/images/image216.png",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From Vision to Launch! Projects We’re Proud Of
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        {/* PORTFOLIO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >

              {/* IMAGE */}
              <div className="relative h-[420px] rounded-2xl overflow-hidden bg-[#0f0f12]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* TEXT */}
              <div className="mt-6">
                <p className="text-[#FF6A00] text-xs mb-1">
                  {project.category}
                </p>
                <h3 className="text-white font-semibold text-base">
                  {project.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
