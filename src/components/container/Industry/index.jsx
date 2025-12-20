import React, { useState } from 'react';
import { DollarSign, ShoppingCart, HeartPulse } from 'lucide-react';

const Industry = () => {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      name: 'Fintech',
      icon: DollarSign,
      title: 'Fintech',
      description:
        'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
      image: '/assets/images/fitc.svg'
    },
    {
      name: 'E-Commerce',
      icon: ShoppingCart,
      title: 'E-Commerce',
      description:
        'Powerful e-commerce platforms designed to scale your business with seamless checkout, inventory control, and customer experience.',
      image: '/assets/images/ecm.svg'
    },
    {
      name: 'Healthcare',
      icon: HeartPulse,
      title: 'Healthcare',
      description:
        'Secure healthcare platforms including telemedicine, patient management, and medical record systems compliant with regulations.',
      image: '/assets/images/hlt.svg'
    }
  ];

  const activeIndustry = industries[activeTab];

  return (
    <section className="bg-[#0B0B0E] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-white mb-3">
            Built for Your Industry
          </h2>
          <p className="text-gray-400 max-w-xl">
            We've helped companies across industries launch smarter, faster,
            and more securely.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-12 gap-10">
          {/* Left Tabs */}
          <div className="col-span-12 md:col-span-3 space-y-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full flex items-center gap-4 text-left pl-4 py-2 border-l-4 transition-all duration-300 ${
                    isActive
                      ? 'border-[#FF6A00] text-white'
                      : 'border-transparent text-gray-500 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{industry.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right Content */}
          <div className="col-span-12 md:col-span-9 grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {activeIndustry.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {activeIndustry.description}
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-gray-800">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
