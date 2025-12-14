import Navbar from "./components/container/NavbarSection";
import Hero from "./components/container/HeroSection";
import About from "./components/container/AboutSection";
import Service from "./components/container/ServiceSection";
import Projects from "./components/container/ProjectsSection";
import Testimonials from "./components/container/TestimonialsSection";
import FAQ from "./components/container/FAQSection";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
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
