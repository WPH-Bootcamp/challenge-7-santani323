import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = ({ isDark = true }) => {
  // Konfigurasi Tema
  const theme = {
    outerBg: isDark ? "bg-black" : "bg-white",
    innerCard: isDark ? "bg-[#0B0D11]" : "bg-gray-100",
    textMain: isDark ? "text-white" : "text-slate-900",
    textNav: isDark
      ? "text-gray-400 hover:text-white"
      : "text-gray-600 hover:text-black",
    border: isDark ? "border-gray-800" : "border-gray-300",
    divider: isDark ? "bg-gray-800/50" : "bg-gray-300",
  };

  return (
    <footer
      className={`${theme.outerBg} py-10 px-6 md:px-12 transition-colors duration-300`}
    >
      {/* Container utama dengan background dinamis */}
      <div
        className={`max-w-7xl mx-auto ${theme.innerCard} rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden transition-colors duration-300`}
      >
        {/* Bagian Atas: Heading & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h3
            className={`text-4xl md:text-5xl font-bold ${theme.textMain} leading-tight uppercase tracking-tight max-w-sm`}
          >
            Let's Discuss Your Ideas
          </h3>

          {/* Logo Brand */}
          <div className="flex items-center space-x-3 mt-8 md:mt-0">
            <img
              src={
                isDark
                  ? "/assets/images/logo-dark.svg"
                  : "/assets/images/logo-light.svg"
              }
              alt="Logo"
              className="h-9 w-auto object-contain"
            />
          </div>
        </div>

        {/* Garis Pembatas Tipis */}
        <div className={`w-full h-[1px] ${theme.divider} mb-10`}></div>

        {/* Bagian Bawah: Navigasi & Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Menu Navigasi */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {["About", "Service", "Projects", "Testimonials", "FAQ"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${theme.textNav} transition-colors duration-300 text-sm font-medium`}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-full border ${theme.border} flex items-center justify-center ${theme.textNav} hover:border-[#FF6A00] transition-all duration-300 hover:scale-110`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright area (Opsional) */}
      <div
        className={`text-center mt-8 text-xs ${
          isDark ? "text-gray-600" : "text-gray-400"
        }`}
      >
        © {new Date().getFullYear()} Your Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
