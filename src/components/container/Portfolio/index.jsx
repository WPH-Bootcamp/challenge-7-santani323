import React from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = ({ isDark }) => {
  const projects = [
    {
      title: "FinPay Mobile App",
      category: "Fintech",
      image: "bg-gradient-to-br from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#0B0B0E] dark:bg-[#0B0B0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From Vision to Launch! Projects We’re Proud Of
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#121216] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer"
            >
              {/* Project Image */}
              <div className={`h-64 ${project.image} relative`}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 bg-[#FF6A00] text-white rounded-full font-medium flex items-center gap-2">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-[#FF6A00]/20 text-[#FF6A00] text-xs font-medium rounded-full mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white">
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
