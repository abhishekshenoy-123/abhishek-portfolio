import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaUsers, FaRocket, FaCheckCircle } from 'react-icons/fa'

const Experience = () => {
  const experienceData = [
    {
      title: "UAT & Deployment Engineer",
      company: "Lcode Technologies Private Limited",
      period: "2024 - Present",
      type: "Internship",
      description: "Currently gaining hands-on experience in UAT level deployments and service management.",
      achievements: [
        "UAT level JAR deployment for production systems",
        "Making services up using nohup command for stability",
        "Integrating FRMS system to Add Beneficiary module",
        "Participating in system testing and validation"
      ],
      skills: ["UAT Testing", "JAR Deployment", "Service Management", "System Integration"],
      icon: <FaRocket className="text-2xl" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Full Stack Developer Intern",
      company: "Agile Minds",
      period: "2023",
      type: "Internship",
      description: "Developed a comprehensive banking application system during internship.",
      achievements: [
        "Built complete banking application with multi-role functionality",
        "Implemented admin, customer, and manager interfaces",
        "Integrated Bootstrap for responsive design",
        "Deployed on Tomcat server with SQL database"
      ],
      skills: ["JSP", "Servlets", "SQL", "Bootstrap", "Tomcat"],
      icon: <FaBriefcase className="text-2xl" />,
      color: "from-green-500 to-emerald-500"
    }
  ]

  const activitiesData = [
    {
      title: "AICUF Member",
      organization: "All India Catholic University Federation",
      role: "Volunteer",
      description: "Active member participating in social service activities and community development programs.",
      activities: ["Orphanage visits", "Community service", "Student welfare programs"],
      icon: <FaUsers className="text-2xl" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "SigMaths Association",
      organization: "Mathematics Association",
      role: "Volunteer",
      description: "Participated in mathematical activities and educational outreach programs.",
      activities: ["Math competitions", "Educational workshops", "Student mentoring"],
      icon: <FaCheckCircle className="text-2xl" />,
      color: "from-orange-500 to-red-500"
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
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Activities</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-text/80 mt-4 max-w-2xl mx-auto">
            Professional experience and extracurricular activities that shape my journey
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-text mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h3>
          
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-primary/50 backdrop-blur-sm rounded-lg p-8 card-hover border border-accent/20"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`bg-gradient-to-r ${exp.color} p-4 rounded-lg text-white flex-shrink-0`}>
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-text">{exp.title}</h4>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <span className="text-text/80 text-sm">{exp.period}</span>
                        <span className="ml-2 px-2 py-1 bg-accent/20 text-accent rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-text/80 mb-6">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-text mb-3">Key Achievements</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start text-text/70"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-accent mr-2">✓</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-text mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Extracurricular Activities
          </motion.h3>
          
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {activitiesData.map((activity, index) => (
              <motion.div
                key={index}
                className="bg-primary/50 backdrop-blur-sm rounded-lg p-6 card-hover border border-accent/20"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`bg-gradient-to-r ${activity.color} p-3 rounded-lg text-white`}>
                    {activity.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text">{activity.title}</h4>
                    <p className="text-accent text-sm">{activity.organization}</p>
                  </div>
                </div>
                
                <p className="text-text/80 mb-4">{activity.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {activity.activities.map((act, actIndex) => (
                    <motion.span
                      key={actIndex}
                      className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                      whileHover={{ scale: 1.05 }}
                    >
                      {act}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
