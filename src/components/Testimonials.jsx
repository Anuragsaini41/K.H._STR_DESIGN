import React from 'react'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import '../styles/components/Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      text: "K.H. STR Design team demonstrated excellent theoretical knowledge during our consultation. Their innovative approach and fresh ideas for our residential project gave us confidence in their capabilities.",
      client: "XYZ",
      role: "Property Owner",
      company: "Residential Client",
      image: "/images/client1.jpg"
    },
    {
      text: "As a fellow engineer, I was impressed by the detailed structural analysis and modern design concepts presented by K.H. STR Design. Their enthusiasm and technical expertise make them a promising partner for future projects.",
      client: "XYZ", 
      role: "Civil Engineer",
      company: "Independent Consultant",
      image: "/images/client1.jpg"
    },
    {
      text: "K.H. STR Design brings fresh perspectives to structural engineering. Their attention to detail during the planning phase of our small office renovation showed great promise. Looking forward to working with them on the complete project.",
      client: "XYZ",
      role: "Business Owner", 
      company: "Local Business",
      image: "/images/client1.jpg"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9,
      rotateX: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const StarRating = () => (
    <div className="stars">
      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
    </div>
  )

  return (
    <section className="testimonials reference-style">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 35, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.8,
            ease: [0.19, 1, 0.22, 1],
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
        >
          <h2>CLIENT FEEDBACK</h2>
          <p>What People Are Saying About Our Approach to Structural Engineering</p>
        </motion.div>

        <motion.div 
          className="testimonials-grid reference-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-item reference-item"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { 
                  duration: 0.4, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <div className="testimonial-header">
                <div className="client-image-circle">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.client}
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
              </div>
              
              <div className="testimonial-content">
                <StarRating />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.client}</h4>
                  <span className="author-role">{testimonial.role}</span>
                  <span className="author-company">{testimonial.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators Section */}
        <motion.div 
          className="trust-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="trust-indicators">
            <div className="trust-item">
              <span className="trust-number">5+</span>
              <span className="trust-label">Consultations Completed</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">3+</span>
              <span className="trust-label">Design Proposals</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">100%</span>
              <span className="trust-label">Client Engagement</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">3+</span>
              <span className="trust-label">Services Offered</span>
            </div>
          </div>
        </motion.div>

        {/* Early-Stage Startup Disclaimer */}
        <motion.div 
          className="startup-disclaimer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            As a new structural engineering startup, we're excited to work with you on your upcoming projects. 
            While we're just getting started, our team brings fresh ideas, modern approaches, and a commitment 
            to excellence in every consultation and design proposal.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
