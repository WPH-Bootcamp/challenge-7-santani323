import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setTheme } from "./store/slices/themeSlice";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/container/HeroSection/index";
import TrustedBy from "./components/container/TrustedBy/index";
import Statistics from "./components/container/Statistics/index";
import Process from "./components/container/Process/index";
import Services from "./components/container/Services/index";
import Industry from "./components/container/Industry/index";
import Portfolio from "./components/container/Portfolio/index";
import Testimonials from "./components/container/Testimonials/index";
import FAQSection from "./components/container/FAQSection/index";
import Contact from "./components/container/Contact/index";
import Footer from "./components/container/Footer/index";
import SuccessModal from "./components/container/SuccessModal";  

function App() {
  const dispatch = useDispatch();
  const isDark = useSelector((state: any) => state.theme.isDark);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 1. Sinkronisasi Tema dengan LocalStorage & Class HTML
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      dispatch(setTheme(false));
      document.documentElement.classList.remove("dark");
    } else {
      dispatch(setTheme(true));
      document.documentElement.classList.add("dark");
    }

    // 2. Logika Pop-up Modal (Selalu muncul saat refresh)
    // Modal akan muncul 1.5 detik setelah komponen dimuat
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    // Cleanup timer jika komponen unmount sebelum 1.5 detik
    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleCloseModal = () => {
    setShowModal(false);
    // Kita tidak lagi menyimpan "hasSeenModal" di sessionStorage
    // Agar saat refresh, useEffect di atas tetap menjalankan setShowModal(true)
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    const newTheme = !isDark;
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={`App ${isDark ? "dark" : ""} relative`}>
      
      {/* SUCCESS MODAL - Akan muncul setiap kali halaman direfresh */}
      <SuccessModal
        isOpen={showModal}
        onClose={handleCloseModal}
        isDark={isDark}
      />

      <div className={`min-h-screen ${!isDark ? 'bg-[#fcfcfc]' : 'bg-[#050505]'} text-slate-900 dark:text-white transition-colors duration-500 overflow-x-hidden`}>
        
        <Navbar isDark={isDark} toggleTheme={handleToggleTheme} />

        <main>
          <Hero isDark={isDark} />

          <div className="max-w-[1440px] mx-auto">
            <TrustedBy isDark={isDark} />
            
            <Statistics isDark={isDark} />
            <Process isDark={isDark} />
            <Services isDark={isDark} />
            <Industry isDark={isDark} />
            <Portfolio isDark={isDark} />
            <Testimonials isDark={isDark} />
            <FAQSection isDark={isDark} />
            <Contact isDark={isDark} />
          </div>
        </main>

        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;