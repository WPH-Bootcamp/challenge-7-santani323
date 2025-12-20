import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default buka yang pertama sesuai gambar

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
    },
    {
      question: "How do I know if this is right for my business?",
      answer:
        "Book a free consult — we’ll assess your goals and recommend the right approach.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Every project is different. Let’s talk about your needs to get a tailored estimate.",
    },
    {
      question: "How long does it take?",
      answer:
        "Depends on scope — but we always prioritize quality and deadlines.",
    },
    {
      question: "Can I start with a small project first?",
      answer: "Absolutely. We often begin with MVPs or pilot projects.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 border-b border-gray-800 pb-8">
          <h2 className="text-4xl md:text-5xl font-bold max-w-md leading-tight">
            Need Help? Start Here.
          </h2>
          <p className="text-gray-400 mt-4 md:mt-0 text-sm md:text-base">
            Everything you need to know — all in one place.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* FAQ List - 8 Columns */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-800">
              {faqs.map((faq, index) => (
                <div key={index} className="py-2">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <span
                      className={`text-xl font-medium transition-colors ${
                        openIndex === index ? "text-white" : "text-gray-200"
                      }`}
                    >
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-40 opacity-100 mb-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card - 4 Columns */}
          <div className="lg:col-span-4">
            <div className="bg-[#C84B31] rounded-[2rem] p-8 flex flex-col h-full">
              <h3 className="text-4xl font-bold mb-4 leading-tight">
                Let’s talk it through
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                book a free consultation with our team.
              </p>

              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden mb-8">
                <img
                  src="/assets/images/ConsultationImage.svg"
                  alt="Team meeting"
                  className="w-full h-48 object-cover"
                />
              </div>

              <button className="w-full bg-white text-black font-semibold py-4 rounded-full transition-transform hover:scale-105">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
