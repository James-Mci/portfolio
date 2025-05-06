import React, { useState, useEffect, createContext } from "react";
import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import hero from "./img/hero.JPG";
import Experience from "./data/Experience";

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
                {["home", "projects", "skills", "about", "contact"].map(
                  (item) => (
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
                  )
                )}
              </div>
            </div>
          )}
        </header>
        {/* Hero Section */}
        <section id="home" className="min-h-screen relative flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20minimalist%20gradient%20background%20with%20subtle%20abstract%20shapes%20in%20light%20blue%20and%20purple%20tones%2C%20professional%20portfolio%20website%20background%2C%20clean%20design%2C%20soft%20transitions%20between%20colors%2C%20elegant%20and%20sophisticated%20atmosphere%2C%20perfect%20for%20a%20developer%20portfolio&width=1440&height=800&seq=hero-bg-1&orientation=landscape')`,
            }}
          ></div>
          <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 sm:mb-10 md:mb-0 px-4 sm:px-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
                Hi, I'm <span className="text-indigo-600">James Muchemi</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-gray-700">
                Frontend Developer & UI/UX Enthusiast
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                I build exceptional digital experiences with clean, efficient
                code and pixel-perfect design implementation.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-eye mr-2"></i> View Projects
                </button>
                <a
                  href="data/james-muchemi-resume.pdf"
                  download="data/james-muchemi-resume.pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    const modal = document.getElementById("resume-modal");
                    if (modal) {
                      modal.style.display = "block";
                    }
                  }}
                  className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 px-8 py-3 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-download mr-2"></i> Download Resume
                </a>
                {/* Resume Modal */}
                {/* <div
                  id="resume-modal"
                  className="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center"
                  onClick={(e) => {
                    if (e.target.id === "resume-modal") {
                      const modal = document.getElementById("resume-modal");
                      if (modal) {
                        modal.style.display = "none";
                      }
                    }
                  }}
                >
                  <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl w-full mx-4 relative">
                    <button
                      onClick={() => {
                        const modal = document.getElementById("resume-modal");
                        if (modal) {
                          modal.style.display = "none";
                        }
                      }}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <i className="fas fa-times text-xl"></i>
                    </button>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Resume Preview
                    </h3>
                    <div
                      className="bg-gray-100 rounded-lg p-4 mb-6"
                      style={{ height: "60vh", overflowY: "auto" }}
                    >
                      <iframe
                        src="data/james-muchemi-resume.pdf"
                        title="Resume Preview"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="flex justify-end space-x-4">
                      <button
                        onClick={() => {
                          const modal = document.getElementById("resume-modal");
                          if (modal) {
                            modal.style.display = "none";
                          }
                        }}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors !rounded-button whitespace-nowrap"
                      >
                        Cancel
                      </button>
                      <a
                        href="data/james-muchemi-resume.pdf"
                        download="james-muchemi-resume.pdf"
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={hero}
                  alt="James Muchemi - Frontend Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section
          id="projects"
          className={`py-20 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-50"
          } transition-colors duration-300`}
        >
          <Projects />
        </section>

        {/* Skills Section */}
        {/* <section
          id="skills"
          className={`py-20 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-50"
          } transition-colors duration-300`}
        >
          <Skills />
        </section> */}
        {/* About/Professional Journey Section */}
        <section
          id="about"
          className={`py-20 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } transition-colors duration-300`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Professional Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                My career path, education, and professional experiences that
                have shaped my skills as a developer.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12">
              <div className="w-full md:w-2/5 px-4 sm:px-0">
                <div className="sticky top-24">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20male%20developer%20working%20on%20computer%20with%20multiple%20screens%2C%20focused%20on%20coding%2C%20modern%20office%20environment%2C%20side%20view%20of%20person%20typing%20on%20keyboard%2C%20casual%20professional%20attire%2C%20clean%20workspace%20with%20minimal%20decoration&width=600&height=800&seq=about-img&orientation=portrait"
                    alt="James Muchemi working"
                    className="rounded-xl shadow-xl w-full h-auto"
                  />
                  <div
                    className={`${
                      isDarkMode ? "bg-gray-700" : "bg-white"
                    } rounded-xl shadow-lg p-6 mt-8 transition-colors duration-300`}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      About Me
                    </h3>
                    <p className="text-gray-600 mb-4">
                      I'm a passionate junior frontend developer with 2 years of
                      experience creating beautiful, functional, and
                      user-centered digital experiences. I'm constantly learning
                      and exploring new technologies to stay at the cutting
                      edge.
                    </p>
                    <p className="text-gray-600"></p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/5 px-4 sm:px-0">
                <div className="relative pl-8 border-l-2 border-indigo-200 space-y-12">
                  {Experience.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-11 mt-1.5 h-6 w-6 rounded-full border-2 border-indigo-500 bg-white"></div>
                      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
                              <i className={`${item.logo} text-xl`}></i>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">
                                {item.role}
                              </h3>
                              <p className="text-indigo-600">{item.company}</p>
                            </div>
                          </div>
                          <span className="text-sm font-medium bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-1">
                            {item.achievements.map(
                              (achievement, achievementIndex) => (
                                <li key={achievementIndex}>{achievement}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className={`py-12 sm:py-16 lg:py-20 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-50"
          } transition-colors duration-300`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential
                opportunities? I'd love to hear from you!
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12">
              <div className="md:w-1/2">
                <form
                  action="https://formsubmit.co/muchemijames19@gmail.com"
                  method="POST"
                  className={`${
                    isDarkMode ? "bg-gray-700" : "bg-white"
                  } rounded-xl shadow-lg p-8 transition-colors duration-300`}
                >
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-3 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-800 text-gray-100"
                          : "border-gray-300 bg-white text-gray-800"
                      } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-colors duration-300`}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-3 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-800 text-gray-100"
                          : "border-gray-300 bg-white text-gray-800"
                      } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-colors duration-300`}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className={`w-full px-4 py-3 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-800 text-gray-100"
                          : "border-gray-300 bg-white text-gray-800"
                      } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-colors duration-300`}
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={`w-full px-4 py-3 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-800 text-gray-100"
                          : "border-gray-300 bg-white text-gray-800"
                      } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-colors duration-300`}
                      placeholder="Tell me about your project or inquiry..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg shadow-lg transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Send Message <i className="fas fa-paper-plane ml-2"></i>
                  </button>
                </form>
              </div>
              <div className="md:w-1/2">
                <div
                  className={`${
                    isDarkMode ? "bg-gray-700" : "bg-white"
                  } rounded-xl shadow-lg p-8 h-full transition-colors duration-300`}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="fas fa-envelope text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-gray-700 font-medium">Email</h4>
                        <a
                          href="mailto:muchemijames19@gmail.com"
                          className="text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                          muchemijames19@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="fas fa-map-marker-alt text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-gray-700 font-medium">Location</h4>
                        <p className="text-gray-600">Nairobi, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="fas fa-clock text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-gray-700 font-medium">
                          Availability
                        </h4>
                        <p className="text-gray-600">Available for Work</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <h4 className="text-gray-700 font-medium mb-4">
                      Connect With Me
                    </h4>
                    <div className="flex space-x-4">
                      {[
                        {
                          icon: "fab fa-github",
                          url: "#",
                          color: "bg-gray-800",
                        },
                        {
                          icon: "fab fa-linkedin",
                          url: "#",
                          color: "bg-blue-600",
                        },
                        {
                          icon: "fab fa-twitter",
                          url: "#",
                          color: "bg-sky-500",
                        },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className={`w-10 h-10 rounded-full ${social.color} text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer`}
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-indigo-400 mb-2">
                  James Muchemi
                </h3>
                <p className="text-gray-400">
                  Frontend Developer & UI/UX Enthusiast
                </p>
              </div>
              {/* <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
                  {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-gray-300 hover:text-white transition-colors !rounded-button whitespace-nowrap cursor-pointer" 
                      >{item}
                      </button>
                    ))}
                </div> */}
              <div className="flex space-x-4">
                {[
                  { icon: "fab fa-github", url: "#" },
                  { icon: "fab fa-linkedin", url: "#" },
                  { icon: "fab fa-twitter", url: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} James Muchemi. All rights
                reserved.
              </p>
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
              >
                Back to Top <i className="fas fa-arrow-up ml-2"></i>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
