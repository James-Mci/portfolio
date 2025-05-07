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
    </div>
  )
}

export default Hero