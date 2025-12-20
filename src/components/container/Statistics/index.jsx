import React from 'react';

const stats = [
  {
    value: '50+',
    label: 'Projects Delivered',
  },
  {
    value: '5+',
    label: 'Years of Experience',
  },
  {
    value: '10+',
    label: 'Industry Awards Won',
  },
  {
    value: '100%',
    label: 'Client Satisfaction Rate',
  },
];

const Statistics = ({ isDark }) => {
  return (
    <section className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-500 ${
      isDark ? "bg-[#0B0B0E]" : "bg-gray-50"
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 ${
          isDark ? "text-white" : "text-gray-900"
        }`}>
          End-to-End IT Solutions That Drive Results
        </h2>
        <p className={`text-center mb-12 max-w-xl text-sm md:text-base ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}>
          From strategy to execution, we deliver solutions that grow your business.
        </p>

        {/* Grid System: 2 Kolom di Mobile, 4 Kolom di Desktop */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center aspect-square rounded-full border transition-all duration-300 shadow-xl ${
                isDark 
                ? "bg-[#121216] border-gray-800 shadow-black/20" 
                : "bg-white border-gray-100 shadow-gray-200/50"
              }`}
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1 text-[#FF6A00]">
                {stat.value}
              </span>
              <span className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-center px-4 leading-tight ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;