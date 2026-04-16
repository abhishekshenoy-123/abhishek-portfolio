import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-text">
              Passionate Full Stack Developer
            </h3>
            
            <p className="text-text/80 leading-relaxed">
              I am R Abhishek Shenoy, a dedicated 8th-semester student at St. Joseph Engineering College with a strong passion for web development and creating innovative digital solutions. My journey in technology has been driven by curiosity and a desire to build applications that make a difference.
            </p>

            <p className="text-text/80 leading-relaxed">
              With a solid foundation in Java, JSP, Spring Boot, and modern web technologies, I have successfully developed complex applications including a comprehensive banking system. My experience spans from frontend development with Bootstrap to backend services and database management.
            </p>

            <p className="text-text/80 leading-relaxed">
              Currently interning at Lcode Technologies Private Limited, I'm gaining valuable industry experience in UAT level deployments, service management, and system integration. I believe in continuous learning and staying updated with the latest technological trends.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={itemVariants}
          >
            <div className="bg-primary/50 p-6 rounded-lg card-hover">
              <h4 className="text-accent font-semibold mb-2">Education</h4>
              <p className="text-text/80 text-sm">B.E. Computer Science</p>
              <p className="text-text/60 text-sm">8th Semester</p>
            </div>

            <div className="bg-primary/50 p-6 rounded-lg card-hover">
              <h4 className="text-accent font-semibold mb-2">Experience</h4>
              <p className="text-text/80 text-sm">Lcode Technologies</p>
              <p className="text-text/60 text-sm">UAT & Deployment</p>
            </div>

            <div className="bg-primary/50 p-6 rounded-lg card-hover">
              <h4 className="text-accent font-semibold mb-2">Skills</h4>
              <p className="text-text/80 text-sm">Full Stack</p>
              <p className="text-text/60 text-sm">Java, React, Spring</p>
            </div>

            <div className="bg-primary/50 p-6 rounded-lg card-hover">
              <h4 className="text-accent font-semibold mb-2">Activities</h4>
              <p className="text-text/80 text-sm">AICUF, SigMaths</p>
              <p className="text-text/60 text-sm">Volunteering</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
