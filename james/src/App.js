import React, { useState, useEffect, createContext } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  const themeContextValue = {
    isDarkMode,
    toggleTheme,
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
        } transition-all duration-300`}
      >
        <SpeedInsights url="https://jamesmuchemi.vercel.app" token="" />
        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } shadow-md z-50 transition-colors duration-300`}
        >
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div
              className={`text-2xl font-bold ${
                isDarkMode ? "text -indigo-400" : "text-indigo-600"
              } transition-colors duration-300`}
            >
              James
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["home", "projects", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-600 hover:text-indigo-500"
                  } capitalize transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer`}
                >
                  {item}
                </button>
              ))}
            </nav>
            {/* Theme Toggle and Mobile Menu Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`${
                  isDarkMode ? "text-yellow-300" : "text-gray-600"
                } focus:outline-none !rounded-button whitespace-nowrap cursor-pointer transition-colors duration-300`}
              >
                <i
                  className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"} text-xl`}
                ></i>
              </button>
              <button
                className={`md:hidden ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } focus:outline-none !rounded-button whitespace-nowrap cursor-pointer`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i
                  className={`fas ${
                    isMenuOpen ? "fa-times" : "fa-bars"
                  } text-2xl`}
                ></i>
              </button>
            </div>
          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white py-4 px-6 shadow-inner">
              <div className="flex flex-col space-y-4">
                {["home", "projects", "about", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`${
                      activeSection === item
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-600"
                    } capitalize py-2 !rounded-button whitespace-nowrap cursor-pointer`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </header>
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
