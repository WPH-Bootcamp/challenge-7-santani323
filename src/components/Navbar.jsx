import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-black/70 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-lg"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
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

          {/* Desktop Menu - Teks diatur Putih saat Dark Mode */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="  text-white rounded-full font-bold text-sm transition-all duration-300  "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-5">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-gray-100 dark:bg-white/10"
                  : "bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20"
              }`}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <a
              href="#contact"
              className="px-6 py-2.5 bg-[#FF6A00] hover:bg-[#FF7A10] text-white rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-orange-500/20 active:scale-95"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900 dark:text-white"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-in-out border-b border-gray-200 dark:border-white/10 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-white dark:bg-[#0B0B0E]`}
      >
        <div className="px-8 py-10 space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-xl font-bold text-gray-900 dark:text-white hover:text-[#FF6A00] dark:hover:text-[#FF6A00]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#contact"
              className="block w-full px-6 py-4 bg-[#FF6A00] text-white rounded-2xl font-bold text-center text-lg shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
