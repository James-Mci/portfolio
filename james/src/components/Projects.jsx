import { useState } from 'react';
import Project from '../data/Project';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [isDarkMode, setIsDarkMode] = useState(false); // Added state for isDarkMode
    
  return (
      <div>
           <section
                     id="projects"
                     className={`py-20 ${setIsDarkMode}${
                       isDarkMode ? "bg-gray-800" : "bg-gray-50"
                     } transition-colors duration-300`}
                   >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    A collection of my recent work showcasing my skills in frontend development, responsive design, and modern UI/UX principles.
                    </p>
                </div>
                {/* Project Filters */}
                <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 sm:gap-3">
                    {['All', 'React', 'PHP', 'TypeScript'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 ${
                            activeFilter === filter
                            ? 'bg-indigo-100 text-indigo-600'
                            : 'bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-600'
                            } rounded-full transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer`}>
                            {filter}
                        </button>
                    ))}
                </div>
                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {Project.filter(project =>
                      activeFilter === 'All' || project.tags.includes(activeFilter)
                  ).map((project, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                          <div className="h-56 overflow-hidden">
                              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" />
                          </div>
                          <div className="p-6">
                              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                              <p className="text-gray-600 mb-4">{project.description}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                  {project.tags.map((tag, tagIndex) => (
                                      <span key={tagIndex} className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full">
                                          {tag}
                                      </span>
                                  ))}
                              </div>
                              <div className="flex space-x-3">
                                  <a href={project.demo} className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer">
                                      <i className="fas fa-external-link-alt mr-1"></i> Live Demo</a>
                                  <a href={project.github} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                                      <i className="fab fa-github mr-1"></i> GitHub
                                  </a>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
              <div className="text-center mt-12">
                  <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                      View All Projects
                      <i className="fas fa-arrow-right ml-2"></i>
                  </button>
              </div>
              </div>
            </section>
      </div>
    )
}
  
export default Projects