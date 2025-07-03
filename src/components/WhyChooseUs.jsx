import React from 'react'
import { motion } from 'framer-motion' // eslint-disable-line
import '../styles/components/WhyChooseUs.css'

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Team",
      description: "Our team consists of highly qualified and experienced structural engineers with decades of combined expertise.",
      icon: "👥"
    },
    {
      title: "Latest Technology", 
      description: "We use cutting-edge software and modern design methodologies to deliver superior results.",
      icon: "💻"
    },
    {
      title: "Cost Effective",
      description: "Optimized designs that provide maximum value without compromising on quality or safety standards.",
      icon: "💰"
    },
    {
      title: "Timely Delivery",
      description: "We ensure all projects are completed within the agreed timeline with exceptional attention to detail.",
      icon: "⏰"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure every project meets the highest industry standards.",
      icon: "✅"
    },
    {
      title: "Client Support",
      description: "Dedicated support throughout the project lifecycle with transparent communication.",
      icon: "🤝"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.85,
      rotateY: -10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1],
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  }

  return (
    <section className="why-choose-us reference-style">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1],
            type: "spring",
            stiffness: 120,
            damping: 12
          }}
        >
          <h2>WHY CHOOSE US</h2>
          <p>Your Trusted Partner in Structural Engineering Excellence</p>
        </motion.div>

        <motion.div 
          className="features-grid reference-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-item reference-item"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                transition: { 
                  duration: 0.4, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }
              }}
            >
              <div className="feature-icon-circle">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              
              <div className="feature-content">
                <div className="feature-number">{index + 1}.</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
