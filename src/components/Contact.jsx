import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with a backend service or use a service like EmailJS
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "abhishekshenoy2004@gmail.com",
      href: "mailto:abhishekshenoy2004@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "+91 7892543117",
      href: "tel:+917892543117"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Mangalore, Karnataka, India",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      href: "https://github.com/abhishekshenoy-123/abhishekshenoy-123"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/abhishek-shenoy-b28aab3bb"
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-text/80 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello!
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-secondary/50 backdrop-blur-sm rounded-lg p-8 border border-accent/20"
          >
            <h3 className="text-2xl font-bold text-text mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary/50 border border-accent/20 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary/50 border border-accent/20 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-primary/50 border border-accent/20 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="I'd love to hear from you..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-8 border border-accent/20">
              <h3 className="text-2xl font-bold text-text mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 text-text/80 hover:text-accent transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-accent group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-text">{info.label}</p>
                      <p className="text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-8 border border-accent/20">
              <h3 className="text-2xl font-bold text-text mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-primary/50 p-4 rounded-lg hover:bg-accent/20 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-accent group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <span className="text-text font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-lg p-6 border border-accent/30"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-bold text-text mb-2">Open to Opportunities</h4>
              <p className="text-text/80">
                I'm currently seeking full-time opportunities in software development, 
                particularly in roles where I can leverage my skills in Java, Spring Boot, 
                and modern web technologies.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
