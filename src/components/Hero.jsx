import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          variants={itemVariants}
        >
          <span className="gradient-text">R Abhishek Shenoy</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-text mb-6"
          variants={itemVariants}
        >
          Full Stack Developer & Engineering Student
        </motion.p>

        <motion.p
          className="text-lg text-text/80 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          8th Semester Student at St. Joseph Engineering College | Passionate about building innovative web applications
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-3 bg-accent text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
          
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center items-center space-x-6"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/abhishekshenoy-123/abhishekshenoy-123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent transition-colors"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub size={32} />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/abhishek-shenoy-b28aab3bb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent transition-colors"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin size={32} />
          </motion.a>
          
          <motion.a
            href="mailto:abhishekshenoy2004@gmail.com"
            className="text-text hover:text-accent transition-colors"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope size={32} />
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-text/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
