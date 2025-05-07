const Skills = () => {
  
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          My technical toolkit and areas of expertise in frontend development and related technologies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            category: "Frontend",
            icon: "fas fa-code",
            color: "indigo",
            skills: [
              { name: "HTML5/CSS3", level: 95 },
              { name: "JavaScript (ES6+)", level: 90 },
              { name: "React.js", level: 92 },
              { name: "Vue.js", level: 85 },
              { name: "TypeScript", level: 88 },
              { name: "Responsive Design", level: 95 }
            ]
          },
          {
            category: "Tools & Frameworks",
            icon: "fas fa-tools",
            color: "purple",
            skills: [
              { name: "Tailwind CSS", level: 90 },
              { name: "Redux", level: 85 },
              { name: "Webpack", level: 80 },
              { name: "Git/GitHub", level: 90 },
              { name: "Jest/Testing Library", level: 85 },
              { name: "Next.js", level: 82 }
            ]
          },
          {
            category: "Other Skills",
            icon: "fas fa-plus-circle",
            color: "blue",
            skills: [
              { name: "UI/UX Design", level: 88 },
              { name: "RESTful APIs", level: 90 },
              { name: "GraphQL", level: 78 },
              { name: "Node.js Basics", level: 75 },
              { name: "Performance Optimization", level: 85 },
              { name: "Agile/Scrum", level: 88 }
            ]
          }
        ].map((category, index) => (
          <div key={index} className={` rounded-xl shadow-lg p-8 transition-colors duration-300`}>
            <div className={`w-16 h-16 rounded-full bg-${category.color}-100 text-${category.color}-600 flex items-center justify-center mb-6 mx-auto`}>
              <i className={`${category.icon} text-2xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-center mb-6">{category.category}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`bg-${category.color}-600 h-2.5 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills