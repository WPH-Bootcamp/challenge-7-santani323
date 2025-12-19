import React from "react";

const Services = () => {
  const services = [
    {
      icon: "assets/images/Website.svg",
      title: "Web Development",
      description: "Build fast, scalable, and SEO-friendly websites.",
    },
    {
      icon: "assets/images/Mobile.svg",
      title: "Mobile App Development",
      description: "Native & cross-platform apps tailored to user needs.",
    },
    {
      icon: "assets/images/UXDesign.svg",
      title: "UI/UX Design",
      description: "Delight users with intuitive and beautiful interfaces.",
    },
    {
      icon: "assets/images/Cloud.svg",
      title: "Cloud Solutions",
      description: "Secure and flexible cloud infrastructure for your growth.",
    },
    {
      icon: "assets/images/Software.svg",
      title: "Software Development",
      description: "Custom solutions built around your business logic.",
    },
    {
      icon: "assets/images/Infrastructure.svg",
      title: "IT Infrastructure",
      description: "Scale your backend with reliable tech foundations.",
    },
    {
      icon: "assets/images/Security.svg",
      title: "Cybersecurity Services",
      description: "Stay protected with enterprise-grade security.",
    },
    {
      icon: "assets/images/QA.svg",
      title: "QA Solutions",
      description: "Ensure performance with rigorous testing frameworks.",
    },
    {
      icon: "assets/images/Consulting.svg",
      title: "IT Consulting & Support",
      description: "Make smarter tech decisions with expert guidance.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0B0B0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                relative
                bg-[#121216]
                rounded-2xl
                p-8
                pt-16
                overflow-visible
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
                group
              "
            >
              {/* HOVER BORDER */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  border-2
                  border-transparent
                  group-hover:border-[#FF6A00]
                  transition-colors
                  duration-300
                "
              />

              {/* FLOATING ICON (NO COLOR BACKGROUND) */}
              <div
                className="
                  absolute
                  -top-8
                  left-8
                  w-20
                  h-20
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-50 h-50 object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
