import React from 'react'
import { motion as Motion } from 'framer-motion'
import { FaBuilding, FaUsers, FaAward, FaCogs, FaCheckCircle } from 'react-icons/fa'
import '../styles/components/About.css'

const About = () => {

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <Motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Motion.div
            className="section-badge"
            whileHover={{ scale: 1.05 }}
          >
            <FaAward />
            <span>About Our Company</span>
          </Motion.div>
          <h2>Know About K.H. STR Design</h2>
          <p>Dynamic Start-up Specializing in Structural Steel Design</p>
        </Motion.div>

        <Motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Motion.div className="about-text" variants={itemVariants}>
            <Motion.div
              className="text-highlight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>
                <FaCogs className="title-icon" />
                Who We Are
              </h3>
              <p>K.H. STR DESIGN is a dynamic start-up company specializing in structural steel design services for buildings, offices, and commercial projects. Our team is composed of experienced engineers and designers who are passionate about delivering innovative, safe, and efficient steel structure solutions.</p>
            </Motion.div>
            
            <Motion.div
              className="text-highlight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p>At KH, we combine cutting-edge technology with industry best practices to support architects, developers, and contractors in turning their visions into reality. Whether it's a small office space or a large-scale building, we are committed to providing high-quality, cost-effective design services tailored to each client's unique needs.</p>
            </Motion.div>

            <Motion.div className="stats" variants={containerVariants}>
              {[
                { icon: FaBuilding, title: "New", subtitle: "Dynamic Start-up", color: "#dc2626" },
                { icon: FaUsers, title: "Expert", subtitle: "Experienced Team", color: "#2563eb" },
                { icon: FaCheckCircle, title: "100%", subtitle: "Quality Commitment", color: "#059669" }
              ].map((stat, index) => (
                <Motion.div 
                  key={index}
                  className="stat"
                  variants={statVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Motion.div 
                    className="stat-icon"
                    style={{ color: stat.color }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon />
                  </Motion.div>
                  <h4>{stat.title}</h4>
                  <p>{stat.subtitle}</p>
                </Motion.div>
              ))}
            </Motion.div>
          </Motion.div>

          <Motion.div 
            className="about-image" 
            variants={imageVariants}
          >
            <Motion.div 
              className="image-placeholder"
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="/images/building 6.jpeg" 
                alt="Modern Building Structure"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="fallback-icon" style={{ display: 'none' }}>
                <FaBuilding size={150} />
              </div>
              <Motion.div 
                className="image-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overlay-content">
                  <h4>Modern Engineering</h4>
                  <p>State-of-the-art structural solutions</p>
                </div>
              </Motion.div>
            </Motion.div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  )
}

export default About
