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

const Statistics = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0B0B0E] dark:bg-[#0B0B0E] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center mb-2">
          End-to-End IT Solutions That Drive Results
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl text-sm md:text-base">
          From strategy to execution, we deliver solutions that grow your business.
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#121216] dark:bg-[#121216] rounded-full flex flex-col items-center justify-center aspect-square min-h-[180px] max-w-[220px] mx-auto shadow-lg shadow-black/10"
            >
              <span className={`text-[2.2rem] md:text-4xl font-bold mb-2 ${stat.value === '100%' ? 'text-[#FF6A00]' : 'text-[#FF6A00]'}`}>{stat.value}</span>
              <span className="text-gray-400 text-base md:text-lg text-center px-2 leading-tight">
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