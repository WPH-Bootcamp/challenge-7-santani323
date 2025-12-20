import React, { useState } from "react";

const Industry = ({ isDark = true }) => {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      name: "Fintech",
      title: "Fintech",
      description:
        "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
      image: "/assets/images/fitc.svg",
    },
    {
      name: "E-Commerce",
      title: "E-Commerce",
      description:
        "Powerful e-commerce platforms designed to scale your business with seamless checkout, inventory control, and customer experience.",
      image: "/assets/images/ecm.svg",
    },
    {
      name: "Healthcare",
      title: "Healthcare",
      description:
        "Secure healthcare platforms including telemedicine, patient management, and medical record systems compliant with regulations.",
      image: "/assets/images/hlt.svg",
    },
  ];

  const activeIndustry = industries[activeTab];

  return (
    <section
      className={`py-24 transition-colors duration-500 ${
        isDark ? "bg-[#000000]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="mb-20">
          <h2
            className={`text-5xl font-bold mb-6 tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Built for Your Industry
          </h2>
          <p
            className={`text-lg ${
              isDark ? "text-gray-400" : "text-gray-500"
            } max-w-2xl`}
          >
            We've helped companies across industries launch smarter, faster, and
            more securely.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Navigation Tabs */}
          <div className="col-span-12 md:col-span-3 flex flex-col space-y-4">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative pl-6 py-2 text-left transition-all duration-300 ${
                  activeTab === index
                    ? "text-white font-medium"
                    : "text-gray-600 hover:text-gray-400"
                }`}
              >
                {/* Vertical Indicator Line */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${
                    activeTab === index ? "bg-[#FF4D00]" : "bg-transparent"
                  }`}
                />
                <span className="text-xl">{industry.name}</span>
              </button>
            ))}
          </div>

          {/* Right Column: Content & Image */}
          <div className="col-span-12 md:col-span-9">
            <div className="flex flex-col space-y-8">
              {/* Description Text - Berada di atas gambar sesuai screenshot */}
              <p
                className={`text-lg leading-relaxed max-w-3xl ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {activeIndustry.description}
              </p>

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                {/* Overlay tipis agar teks deskripsi lebih menonjol jika ada overlap */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
