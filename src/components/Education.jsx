import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science Engineering",
      institution: "St. Joseph Engineering College",
      period: "2020 - 2024",
      status: "8th Semester (Final Year)",
      icon: <FaGraduationCap className="text-3xl" />,
      description: "Pursuing B.E. in Computer Science Engineering with focus on software development and web technologies."
    },
    {
      degree: "Pre-University Course",
      field: "Science Stream",
      institution: "Canara College",
      period: "2018 - 2020",
      percentage: "95.83%",
      icon: <FaSchool className="text-3xl" />,
      description: "Completed PUC with excellent academic performance in Science stream."
    },
    {
      degree: "Secondary School Leaving Certificate",
      field: "General Education",
      institution: "Canara High School Main",
      period: "2008 - 2018",
      percentage: "94.88%",
      icon: <FaSchool className="text-3xl" />,
      description: "Completed 10 years of schooling with outstanding academic achievements."
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
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/30"></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                variants={itemVariants}
              >
                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 bg-secondary/50 backdrop-blur-sm p-6 rounded-lg shadow-lg card-hover ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-accent flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-accent font-medium mb-1">
                        {edu.field}
                      </p>
                      <p className="text-text/80 mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-text/60 text-sm mb-2">
                        {edu.period}
                      </p>
                      {(edu.percentage || edu.status) && (
                        <p className="text-accent/80 text-sm font-medium mb-2">
                          {edu.percentage || edu.status}
                        </p>
                      )}
                      <p className="text-text/70 text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-primary z-10"
                  whileHover={{ scale: 1.3 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
