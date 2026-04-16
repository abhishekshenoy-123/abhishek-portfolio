import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaUsers, FaChartLine, FaShieldAlt } from 'react-icons/fa'

const Projects = () => {
  const projectsData = [
    {
      title: "Banking Application System",
      description: "Comprehensive banking management system with multi-role functionality including admin, customer, and manager interfaces.",
      features: [
        "Admin can create branches and assign managers",
        "Customer operations: withdraw, deposit, balance check",
        "Daily and monthly transaction reports",
        "Bootstrap responsive design"
      ],
      technologies: ["JSP", "Servlets", "SQL", "Tomcat Server", "Bootstrap"],
      company: "Agile Minds Internship",
      icon: <FaShieldAlt className="text-3xl" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "FRMS System Integration",
      description: "Integration of FRMS (Fraud Risk Management System) with Add Beneficiary module for enhanced security and validation.",
      features: [
        "UAT level JAR deployment",
        "Service management using nohup command",
        "System integration and testing",
        "Security validation implementation"
      ],
      technologies: ["Java", "Spring Boot", "UAT Testing", "Service Deployment"],
      company: "Lcode Technologies Private Limited",
      icon: <FaChartLine className="text-3xl" />,
      color: "from-green-500 to-emerald-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-text/80 mt-4 max-w-2xl mx-auto">
            Real-world projects showcasing technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-secondary/50 backdrop-blur-sm rounded-lg p-8 card-hover border border-accent/20"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
              }}
            >
              <div className="flex items-start space-x-6">
                <div className={`bg-gradient-to-r ${project.color} p-4 rounded-lg text-white flex-shrink-0`}>
                  {project.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-text mb-2 md:mb-0">
                      {project.title}
                    </h3>
                    <span className="text-accent font-medium">
                      {project.company}
                    </span>
                  </div>
                  
                  <p className="text-text/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-text mb-3 flex items-center">
                      <FaUsers className="mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start text-text/70"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-accent mr-2">▸</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-text mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(59, 130, 246, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
