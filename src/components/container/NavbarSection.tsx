import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // Handler untuk dark mode (dummy, bisa dihubungkan ke context/theme provider)
  const [dark, setDark] = useState(false);
  const handleToggleDark = () => setDark((d) => !d);

  return (
    <nav className="w-full bg-transparent py-6 fixed top-0 left-0 z-20">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/Logo.svg"
            alt="Logo"
            className="w-50 h-10 object-contain"
          />
        </div>
        {/* Burger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-white font-medium text-base">
          <li><a href="#about" className="hover:text-[#FF6B3D] transition">About</a></li>
          <li><a href="#service" className="hover:text-[#FF6B3D] transition">Service</a></li>
          <li><a href="#projects" className="hover:text-[#FF6B3D] transition">Portfolio</a></li>
          <li><a href="#testimonials" className="hover:text-[#FF6B3D] transition">Testimonials</a></li>
          <li><a href="#faq" className="hover:text-[#FF6B3D] transition">FAQ</a></li>
        </ul>
        <div className="hidden md:flex items-center gap-2">
          <a href="#faq" className="px-7 py-2 rounded-full bg-linear-to-r from-[#FF6B3D] to-[#FF9066] text-white font-semibold shadow hover:from-[#ff7a4d] hover:to-[#ffb088] transition text-base">Let's Talk</a>
          <button
            className="flex items-center justify-center text-white hover:text-yellow-400 transition text-2xl"
            onClick={handleToggleDark}
            aria-label="Toggle dark mode"
          >
            {dark ? "🌙" : "🌞"}
          </button>
        </div>
        {/* Menu Mobile */}
        {/* Dark Mode Icon Mobile (di dalam menu mobile) */}
        {open && (
          <>
            <button
              type="button"
              className="fixed inset-0 bg-black/70 z-30 flex md:hidden"
              onClick={() => setOpen(false)}
              aria-label="Close menu overlay"
              style={{ cursor: 'pointer', background: 'rgba(0,0,0,0.7)', border: 'none', padding: 0, margin: 0 }}
              tabIndex={0}
            ></button>
            <div
              className="fixed inset-0 z-40 md:hidden bg-[#18111A] w-full h-full flex flex-col shadow-2xl animate-slideInLeft"
            >
              {/* Logo and Close */}
              <div className="flex items-center justify-between px-6 pt-6 pb-8">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/Logo.svg"
                    alt="Logo"
                    className="w-50 h-10 object-contain"
                  />
                </div>
                <button className="w-8 h-8 flex items-center justify-center" onClick={() => setOpen(false)} aria-label="Close menu">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              {/* Menu Items */}
              <ul className="flex flex-col gap-6 px-6 text-white font-medium text-lg">
                <li><a href="#about" className="hover:text-[#FF6B3D] transition block py-2" onClick={() => setOpen(false)}>About</a></li>
                <li><a href="#service" className="hover:text-[#FF6B3D] transition block py-2" onClick={() => setOpen(false)}>Service</a></li>
                <li><a href="#projects" className="hover:text-[#FF6B3D] transition block py-2" onClick={() => setOpen(false)}>Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-[#FF6B3D] transition block py-2" onClick={() => setOpen(false)}>Testimonials</a></li>
                <li><a href="#faq" className="hover:text-[#FF6B3D] transition block py-2" onClick={() => setOpen(false)}>FAQ</a></li>
              </ul>
              <div className="px-6 mt-8 flex flex-col gap-4">
                <button
                  className="w-full block text-white hover:text-yellow-400 transition text-2xl text-center"
                  onClick={handleToggleDark}
                  aria-label="Toggle dark mode"
                >
                  {dark ? "🌙" : "🌞"}
                </button>
                <a href="#faq" className="w-full block px-7 py-3 rounded-full bg-linear-to-r from-[#FF6B3D] to-[#FF9066] text-white font-semibold shadow hover:from-[#ff7a4d] hover:to-[#ffb088] transition text-base text-center" onClick={() => setOpen(false)}>Let's Talk</a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
