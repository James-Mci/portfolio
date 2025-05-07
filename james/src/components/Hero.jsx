import hero from "../img/hero.png";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
      <div>
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
                href={require("../data/james-muchemi-resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-indigo-600 border border-indigo-600 px-8 py-3 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-file-pdf mr-2"></i> Download Resume
              </a>               
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
    </div>
  )
}

export default Hero