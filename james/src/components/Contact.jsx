import socials from '../data/socials'

import { useState } from 'react';

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default value for isDarkMode
  return (
    <div>
       <section
          id="contact"
          className={`py-12 sm:py-16 lg:py-20 ${setIsDarkMode}${
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
                className={`${isDarkMode ?
                  "bg-gray-700" : "bg-white " 
                } ${setIsDarkMode  ? "text-gray-100" : "text-gray-800"
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
                  className={`${isDarkMode ?
                    "bg-gray-700" : "bg-white " 
                  } ${setIsDarkMode  ? "text-gray-100" : "text-gray-800"
                    }  rounded-xl shadow-lg p-8 h-full transition-colors duration-300`}
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
                      {socials.map((social, index) => (
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
    </div>
  )
}

export default Contact