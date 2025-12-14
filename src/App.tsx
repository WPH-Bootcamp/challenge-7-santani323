import Hero from "./components/container/HeroSection";
import About from "./components/container/AboutSection";
import Service from "./components/container/ServiceSection";
import Projects from "./components/container/ProjectsSection";
import Testimonials from "./components/container/TestimonialsSection";
import FAQ from "./components/container/FAQSection";

function Navbar() {
  return (
    <nav className="w-full bg-transparent py-6 px-4 md:px-12 flex items-center justify-between absolute top-0 left-0 z-20">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-tr from-[#FF6B3D] to-[#FF9066] rounded-md flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm rotate-12" />
        </div>
        <span className="text-white text-xl font-bold tracking-tight">
          Your Logo
        </span>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-white font-medium text-base">
        <li>
          <a href="#about" className="hover:text-[#FF6B3D] transition">
            About
          </a>
        </li>
        <li>
          <a href="#service" className="hover:text-[#FF6B3D] transition">
            Service
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-[#FF6B3D] transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-[#FF6B3D] transition">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-[#FF6B3D] transition">
            FAQ
          </a>
        </li>
      </ul>
      <a
        href="#faq"
        className="hidden md:block px-7 py-2 rounded-full bg-gradient-to-r from-[#FF6B3D] to-[#FF9066] text-white font-semibold shadow hover:from-[#ff7a4d] hover:to-[#ffb088] transition text-base"
      >
        Let's Talk
      </a>
    </nav>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-[#18111A]">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="service">
          <Service />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
    </div>
  );
}

export default App;
