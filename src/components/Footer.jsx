import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/abhishekshenoy-123/abhishekshenoy-123",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://linkedin.com/in/abhishek-shenoy-b28aab3bb",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      href: "mailto:abhishekshenoy2004@gmail.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <footer className="bg-secondary/50 border-t border-accent/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">R Abhishek Shenoy</h3>
            <p className="text-text/70 mb-6 leading-relaxed">
              Passionate Full Stack Developer and Engineering Student dedicated to building 
              innovative web applications and solving complex problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/70 hover:text-accent transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-text/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-text mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-text/70">
                <span className="font-medium text-text">Email:</span> abhishekshenoy2004@gmail.com
              </p>
              <p className="text-text/70">
                <span className="font-medium text-text">Location:</span> Mangalore, Karnataka, India
              </p>
              <p className="text-text/70">
                <span className="font-medium text-text">Status:</span> Open to opportunities
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-accent/20 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text/60 text-sm mb-4 md:mb-0">
              © {currentYear} R Abhishek Shenoy. All rights reserved.
            </p>
            <p className="text-text/60 text-sm flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
