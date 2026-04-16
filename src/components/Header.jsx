import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Experience', 'Contact']

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AS
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-text hover:text-accent transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/abhishekshenoy-123/abhishekshenoy-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abhishek-shenoy-b28aab3bb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 text-text hover:text-accent transition-colors"
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.button>
            ))}
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://github.com/abhishekshenoy-123/abhishekshenoy-123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-accent"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/abhishek-shenoy-b28aab3bb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-accent"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
