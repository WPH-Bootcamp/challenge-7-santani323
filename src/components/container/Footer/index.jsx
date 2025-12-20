import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-10 px-6 md:px-12">
      {/* Container utama dengan background gelap dan rounded corners */}
      <div className="max-w-7xl mx-auto bg-[#0B0D11] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
        
        {/* Bagian Atas: Heading & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight uppercase tracking-tight max-w-sm">
            Let's Discuss Your Ideas
          </h2>
          
          {/* Logo Brand */}
          <div className="flex items-center space-x-3 mt-8 md:mt-0">
            <div className="relative">
              {/* Icon Logo (Dua kotak miring oranye) */}
              <div className="w-6 h-6 bg-[#FF6A00] rounded-sm rotate-12 absolute -left-1"></div>
              <div className="w-6 h-6 bg-[#FF6A00] rounded-sm opacity-80"></div>
            </div>
            <span className="text-white font-bold text-2xl tracking-wide ml-2">Your Logo</span>
          </div>
        </div>

        {/* Garis Pembatas Tipis */}
        <div className="w-full h-[1px] bg-gray-800/50 mb-10"></div>

        {/* Bagian Bawah: Navigasi & Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Menu Navigasi */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['About', 'Service', 'Projects', 'Testimonials', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Media Icons (Rounded Pills) */}
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Twitter, href: '#' } // Icon Twitter diganti TikTok sesuai gambar jika perlu
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-[#FF6A00] hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;