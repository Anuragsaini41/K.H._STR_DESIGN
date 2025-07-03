import React from 'react'
import { motion as Motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import '../styles/components/Services.css'

const Services = () => {
  const navigate = useNavigate()

  const services = [
    {
      title: "Structural Design Services",
      description: "Complete structural design solutions for residential, commercial, and industrial buildings using advanced engineering principles and cutting-edge software for safe, efficient, and cost-effective structures.",
      image: "/images/building 1.jpg",
      route: "/services/structural-design"
    },
    {
      title: "Drafting Services",
      description: "Professional architectural and structural drafting services including 2D technical drawings, 3D modeling, construction documentation, and detailed shop drawings for accurate project execution.",
      image: "/images/building 3.jpg",
      route: "/services/drafting-services"
    },
    {
      title: "Site Supervision Services",
      description: "Expert on-site supervision and quality control services ensuring proper implementation of structural designs, adherence to safety standards, and compliance with building codes throughout construction phases.",
      image: "/images/building 4.jpg",
      route: "/services/site-supervision"
    },
    {
      title: "Structural Audit Services",
      description: "Thorough structural health assessment of existing buildings including condition evaluation, safety analysis, repair recommendations, and strengthening solutions to ensure structural integrity and longevity.",
      image: "/images/building 5.jpg",
      route: "/services/structural-audit"
    }
  ]

  const handleServiceClick = (route) => {
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Small delay to ensure smooth scrolling completes
    setTimeout(() => {
      navigate(route)
    }, 100)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section id="services" className="services reference-style">
      <div className="container">
        <Motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <h2>OUR SERVICES</h2>
          <p>Our services at "K.H. STR Design Solution" encompass a comprehensive range of offerings tailored to meet diverse structural engineering needs. We specialize in delivering exceptional structural design solutions for residential, commercial, and industrial projects.</p>
        </Motion.div>

        <Motion.div 
          className="services-grid reference-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <Motion.div 
              key={index} 
              className="service-item reference-item"
              variants={itemVariants}
              onClick={() => handleServiceClick(service.route)}
              style={{ cursor: 'pointer' }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { 
                  duration: 0.4, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="service-image-circle">
                <img 
                  src={service.image} 
                  alt={service.title}
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
              
              <div className="service-content">
                <div className="service-number">{index + 1}.</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}

export default Services
