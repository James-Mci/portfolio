import socials from "../data/socials"

// Function to scroll to a specific section
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
      <div>
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

              <div className="flex space-x-4">
                {socials.map((social, index) => (
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
  )
}

export default Footer