import { useEffect } from "react";
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

function App() {
  const dispatch = useDispatch();
  const isDark = useSelector((state: any) => state.theme.isDark);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      dispatch(setTheme(false));
      document.documentElement.classList.remove("dark");
    } else {
      dispatch(setTheme(true));
      document.documentElement.classList.add("dark");
    }
    // eslint-disable-next-line
  }, [dispatch]);

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
    <div className={`App ${isDark ? "dark" : ""}`}>
      <div className="min-h-screen bg-[#f9f9fb] dark:bg-[#0B0B0E] transition-colors duration-300">
        <Navbar isDark={isDark} toggleTheme={handleToggleTheme} />
        <Hero isDark={isDark} />
        <TrustedBy isDark={isDark} />
        <Statistics isDark={isDark} />
        <Process isDark={isDark} />
        <Services isDark={isDark} />
        <Industry isDark={isDark} />
        <Portfolio isDark={isDark} />
        <Testimonials isDark={isDark} />
        <FAQSection isDark={isDark} />
        <Contact isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
