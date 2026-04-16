import React from 'react'
import { motion } from 'framer-motion'
import { FaJava, FaDatabase, FaGitAlt, FaCode, FaServer, FaTools } from 'react-icons/fa'

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: <FaCode className="text-3xl" />,
      skills: ["Java", "JavaScript", "SQL", "PL/SQL"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Web Technologies",
      icon: <FaServer className="text-3xl" />,
      skills: ["JSP", "Servlets", "Spring Boot", "Bootstrap", "HTML/CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Database",
      icon: <FaDatabase className="text-3xl" />,
      skills: ["SQL", "PL/SQL", "MySQL", "Oracle"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools & Platforms",
      icon: <FaTools className="text-3xl" />,
      skills: ["GitHub", "VS Code", "Spring Tool Suite", "Oracle SQL Log", "UAT"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Version Control",
      icon: <FaGitAlt className="text-3xl" />,
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      color: "from-gray-500 to-gray-700"
    },
    {
      category: "Development Practices",
      icon: <FaJava className="text-3xl" />,
      skills: ["Agile Methodology", "UAT Testing", "JAR Deployment", "Service Management"],
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-text/80 mt-4 max-w-2xl mx-auto">
            Comprehensive skill set covering full-stack development, database management, and modern development practices
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="bg-primary/50 backdrop-blur-sm rounded-lg p-6 card-hover border border-accent/20"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
            >
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-text">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-text mb-8">Other Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Problem Solving", "Team Collaboration", "Agile Development", 
              "UAT Testing", "Service Deployment", "System Integration",
              "Database Design", "API Development", "Frontend Development",
              "Backend Development", "Version Control", "Code Review"
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-lg border border-accent/30"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.3)"
                }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-text font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
