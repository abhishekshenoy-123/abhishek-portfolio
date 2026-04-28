import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaMapMarkerAlt, FaPhone, FaCode, FaRocket } from 'react-icons/fa'

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
    { name: "Home", href: "#home", icon: <FaRocket className="text-sm" /> },
    { name: "About", href: "#about", icon: <FaCode className="text-sm" /> },
    { name: "Education", href: "#education", icon: <FaCode className="text-sm" /> },
    { name: "Skills", href: "#skills", icon: <FaCode className="text-sm" /> },
    { name: "Projects", href: "#projects", icon: <FaCode className="text-sm" /> },
    { name: "Experience", href: "#experience", icon: <FaCode className="text-sm" /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope className="text-sm" /> }
  ]

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-accent" />,
      label: "Email",
      value: "abhishekshenoy2004@gmail.com",
      href: "mailto:abhishekshenoy2004@gmail.com"
    },
    {
      icon: <FaPhone className="text-accent" />,
      label: "Phone",
      value: "+91 7892543117",
      href: "tel:+917892543117"
    },
    {
      icon: <FaMapMarkerAlt className="text-accent" />,
      label: "Location",
      value: "Mangalore, Karnataka, India",
      href: "#"
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-secondary via-primary to-secondary border-t border-accent/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold gradient-text mb-4">R Abhishek Shenoy</h3>
            <p className="text-text/70 mb-6 leading-relaxed">
              Passionate Full Stack Developer and Engineering Student dedicated to building 
              innovative web applications and solving complex problems.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 border border-accent/30"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Status Badge */}
            <motion.div
              className="mt-6 inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/30"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-accent text-sm font-medium">Open to Opportunities</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-text mb-6 flex items-center">
              <span className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-3">
                <FaRocket className="text-accent text-sm" />
              </span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center text-text/70 hover:text-accent transition-colors group"
                  >
                    <span className="w-6 h-6 bg-accent/10 rounded flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors">
                      {link.icon}
                    </span>
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
            <h4 className="text-xl font-semibold text-text mb-6 flex items-center">
              <span className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-3">
                <FaEnvelope className="text-accent text-sm" />
              </span>
              Get In Touch
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-start space-x-4 text-text/70 hover:text-accent transition-colors group p-3 rounded-lg hover:bg-accent/5"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium text-text text-sm">{info.label}</p>
                    <p className="text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
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
              Built with <FaHeart className="text-red-500 mx-1 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
