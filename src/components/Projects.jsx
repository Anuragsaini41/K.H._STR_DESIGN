import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Building2, Target, Lightbulb, ArrowRight, Eye, CheckCircle } from 'lucide-react'
import '../styles/components/Projects.css'

const Projects = () => {
  const [activeCapability, setActiveCapability] = useState(0)

  const capabilities = [
    {
      icon: Building2,
      title: "Steel Structure Design",
      description: "Comprehensive structural steel design for all building types.",
      color: "#dc2626",
      colorRgb: "220, 38, 38"
    },
    {
      icon: Target,
      title: "3D Modeling & Analysis",
      description: "Advanced 3D modeling with precise structural analysis.",
      color: "#2563eb",
      colorRgb: "37, 99, 235"
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Creative engineering solutions for complex challenges.",
      color: "#059669",
      colorRgb: "5, 150, 105"
    },
    {
      icon: Eye,
      title: "Quality Assurance",
      description: "Rigorous quality control and safety compliance.",
      color: "#7c3aed",
      colorRgb: "124, 58, 237"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const capabilityVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  }

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="section-badge"
            whileHover={{ scale: 1.05 }}
          >
            <Award />
            <span>Our Journey</span>
          </motion.div>
          <h2>Building Our Future</h2>
          <p>Shaping Tomorrow's Structures with Innovation & Excellence</p>
        </motion.div>

        <motion.div 
          className="startup-message"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container">
            <motion.div className="message-content" variants={itemVariants}>
              <motion.div 
                className="vision-card"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>Our Project Vision</h3>
                <p>
                  As a newly established start-up, K.H. STR Design Solution is in the early stages of building our project portfolio. 
                  While we do not have completed projects to showcase at this time, our team brings valuable 
                  experience from previous work in the structural steel design industry.
                </p>
                <p>
                  We are actively seeking opportunities to collaborate with clients, architects, and contractors 
                  on a wide range of building and office projects. Our commitment to quality, innovation, and 
                  precision positions us to deliver exceptional results as we grow.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="capabilities"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="capabilities-container">
            <h4 className="capabilities-title">Our Core Capabilities</h4>
            <div className="capability-grid">
              {capabilities.map((capability, index) => (
                <motion.div 
                  key={index}
                  className={`capability-item ${activeCapability === index ? 'active' : ''}`}
                  variants={capabilityVariants}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                  }}
                  onClick={() => setActiveCapability(index)}
                  onHoverStart={() => setActiveCapability(index)}
                  style={{ 
                    '--accent-color': capability.color,
                    '--accent-color-rgb': capability.colorRgb
                  }}
                >
                  <motion.div 
                    className="capability-icon"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <capability.icon />
                  </motion.div>
                  <div className="capability-content">
                    <h5 className="capability-title">{capability.title}</h5>
                    <p className="capability-description">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="projects-cta text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Want to see your project here?</p>
          <a href="/contact" className="btn-primary">Start Your Project <ArrowRight size={16} /></a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
