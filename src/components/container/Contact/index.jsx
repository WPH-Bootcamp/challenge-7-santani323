import React, { useState } from "react";

const Contact = ({ isDark = true }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: ["Web Development"],
  });

  const servicesList = [
    "Web Development",
    "Cloud Solutions",
    "Mobile App Development",
    "Software Development",
    "UI/UX Design",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(service);
      if (isSelected) {
        return { ...prev, services: prev.services.filter((s) => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
  };

  // Konfigurasi Tema berdasarkan isDark
  const theme = {
    section: isDark ? "bg-black text-white" : "bg-white text-slate-900",
    input: isDark 
      ? "bg-black border-gray-800 text-white placeholder:text-gray-600 focus:border-[#FF6A00]" 
      : "bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 focus:border-[#FF6A00]",
    label: isDark ? "text-white" : "text-slate-700",
    subtext: isDark ? "text-gray-400" : "text-gray-500",
    checkboxUnselected: isDark ? "border-gray-700 bg-transparent" : "border-gray-300 bg-white",
    checkboxText: isDark ? "text-gray-300" : "text-gray-600",
  };

  return (
    <section className={`${theme.section} py-20 px-4 transition-colors duration-300`}>
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Ready to Start? Let’s Talk.
          </h2>
          <p className={`${theme.subtext} text-lg`}>
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Input */}
          <div className="space-y-2">
            <label className={`block text-sm font-semibold ml-1 ${theme.label}`}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full border rounded-xl px-4 py-4 focus:outline-none transition-all ${theme.input}`}
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label className={`block text-sm font-semibold ml-1 ${theme.label}`}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full border rounded-xl px-4 py-4 focus:outline-none transition-all ${theme.input}`}
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label className={`block text-sm font-semibold ml-1 ${theme.label}`}>Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full border rounded-xl px-4 py-4 focus:outline-none transition-all resize-none ${theme.input}`}
            ></textarea>
          </div>

          {/* Services Checkboxes */}
          <div className="space-y-4">
            <label className={`block text-sm font-semibold ml-1 ${theme.label}`}>Services</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesList.map((service) => {
                const isSelected = formData.services.includes(service);
                return (
                  <div
                    key={service}
                    onClick={() => handleServiceChange(service)}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <div
                      className={`w-6 h-6 rounded flex items-center justify-center border transition-all ${
                        isSelected
                          ? "bg-[#FF6A00] border-[#FF6A00]"
                          : `${theme.checkboxUnselected} group-hover:border-[#FF6A00]`
                      }`}
                    >
                      {isSelected && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm font-medium transition-colors ${isSelected ? (isDark ? 'text-white' : 'text-black') : theme.checkboxText}`}>
                      {service}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-[#FF6A00] hover:bg-[#FF7A10] text-white font-bold py-5 rounded-full text-lg transition-all hover:shadow-lg hover:shadow-[#FF6A00]/20 active:scale-[0.98]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;