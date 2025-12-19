import { useEffect, useState, createContext, useMemo } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/container/HeroSection/index";
import TrustedBy from "./components/container/TrustedBy/index"; 

export const ThemeContext = createContext({
  dark: false,
  toggleDark: () => {},
});

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

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
        {" "}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <TrustedBy />
      </div>
    </div>
  );
}

export default App;
