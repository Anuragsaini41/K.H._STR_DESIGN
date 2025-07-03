import React, { useEffect, useState } from 'react'
import { motion as Motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone, Sparkles } from 'lucide-react'
import '../styles/components/Hero.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <section id="home" className="hero">
      {/* Dynamic background particles */}
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <Motion.div
            key={i}
            className="particle"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`
            }}
          />
        ))}
      </div>

      <Motion.div 
        className="hero-background"
        style={{ y: y1 }}
      >
        <img 
          src="/images/hero/hero-bg.jpg" 
          alt="Construction Background" 
          className="hero-bg-image"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        <Motion.div 
          className="hero-overlay"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)`
          }}
        ></Motion.div>
      </Motion.div>
      
      <Motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text">
          <Motion.div
            className="hero-badge"
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} />
            <span>Premium Structural Engineering</span>
          </Motion.div>

          <Motion.h1 
            className="hero-title"
            variants={titleVariants}
          >
            Expert Structural 
            <Motion.span 
              className="highlight"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            > Design Solutions</Motion.span>
          </Motion.h1>
          
          <Motion.p 
            className="hero-subtitle"
            variants={textVariants}
          >
            We provide comprehensive structural engineering services with precision, 
            innovation, and reliability for all your construction needs.
          </Motion.p>
          
          <Motion.div 
            className="hero-stats"
            variants={itemVariants}
          >
            
            <div className="stat-item">
              <span className="stat-number">24*7</span>
              <span className="stat-label">Support Available</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality Focused</span>
            </div>
          </Motion.div>
          
          <Motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <Motion.a 
              href="#services"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Get Started
              <ArrowRight size={20} />
            </Motion.a>
            <Motion.a 
              href="tel:+919991762005"
              className="btn-secondary call-now"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={18} />
              Call Now
            </Motion.a>
          </Motion.div>
        </div>
        
        <Motion.div 
          className="hero-visual"
          variants={itemVariants}
        >
          <Motion.div 
            className="services-showcase"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="showcase-header">
              <h3>Our Expertise</h3>
            </div>
            <div className="showcase-content">
              <div className="service-item">
                <div className="service-icon">🏗️</div>
                <div className="service-text">
                  <h4>Structural Design</h4>
                  <p>Advanced Engineering Solutions</p>
                </div>
              </div>
              
              <div className="service-item">
                <div className="service-icon">📐</div>
                <div className="service-text">
                  <h4>Precise Calculations</h4>
                  <p>Error-Free Engineering</p>
                </div>
              </div>
              
              <div className="service-item">
                <div className="service-icon">🏢</div>
                <div className="service-text">
                  <h4>Modern Buildings</h4>
                  <p>Future-Ready Architecture</p>
                </div>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </section>
  )
}

export default Hero
