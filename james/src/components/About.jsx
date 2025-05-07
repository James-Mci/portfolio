import Experience from "../data/Experience";

import { useState } from 'react';

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default value for isDarkMode
  return (
    <div>
      <section
          id="about"
          className={`py-20 ${setIsDarkMode}${
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
    </div>
  )
}

export default About