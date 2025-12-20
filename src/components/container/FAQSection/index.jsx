import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = ({ isDark }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive digital solutions including web development, mobile app development, UI/UX design, cloud solutions, digital marketing, and IT consulting. Our team specializes in delivering end-to-end solutions tailored to your business needs.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. A basic website takes 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the consultation phase and keep you updated throughout the development process.'
    },
    {
      question: 'Can I start with a small project?',
      answer: 'Absolutely! We welcome projects of all sizes. Starting with a smaller project is a great way to experience our process and build a relationship. We can always scale up as your needs grow.'
    },
    {
      question: 'What industries do you work with?',
      answer: 'We have extensive experience across multiple industries including Fintech, E-commerce, Healthcare, Education, SaaS, and more. Our versatile team can adapt to various industry requirements and regulations.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! We offer comprehensive post-launch support including maintenance, updates, performance monitoring, and feature enhancements. We\'re committed to your long-term success.'
    },
    {
      question: 'What is your development process?',
      answer: 'Our process includes five key phases: Discovery & Consultation, Planning & Strategy, Design & Development, Testing & Optimization, and Launch & Growth. We maintain transparent communication throughout each phase.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0B0B0E] dark:bg-[#0B0B0E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#FF6A00] text-sm uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#121216] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-200 hover:bg-[#0B0B0E]"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-[#FF6A00] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;