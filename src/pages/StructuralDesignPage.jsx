import React from 'react'
import { motion as Motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/ServicePage.css'

const StructuralDesignPage = () => {
  return (
    <div className="service-page">
      
      
      <main className="service-main">
        {/* Hero Section */}
        <Motion.section 
          className="service-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="service-hero-bg">
            <img src="/images/building 1.jpg" alt="Structural Design" />
            <div className="service-hero-overlay"></div>
          </div>
          <div className="container">
            <Motion.div 
              className="service-hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="service-hero-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9.5V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 14.5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L17 7M12 12L7 7M12 12L7 17M12 12L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Engineering Excellence
              </div>
              <h1>Structural <span className="highlight">Design</span> Services</h1>
              <p>Excellence in structural designs for all projects – residential, commercial, and industrial.</p>
              <Motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Get Quote
              </Motion.button>
            </Motion.div>
          </div>
        </Motion.section>

        {/* Service Details */}
        <section className="service-details">
          <div className="container">
            <div className="service-content-grid">
              <Motion.div 
                className="service-overview"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2>Service Overview</h2>
                <p>
                  Our structural design services encompass comprehensive engineering solutions for buildings of all types and sizes. 
                  We provide innovative, cost-effective, and sustainable structural systems that meet the highest safety standards 
                  while optimizing material usage and construction efficiency.
                </p>
                <p>
                  With years of experience and cutting-edge technology, we deliver precise structural designs that comply with 
                  all relevant building codes and regulations, ensuring your project's success from conception to completion.
                </p>
              </Motion.div>

              <Motion.div 
                className="service-features"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3>What We Offer</h3>
                <ul>
                  <li>Residential Building Design</li>
                  <li>Commercial Structure Design</li>
                  <li>Industrial Facility Design</li>
                  <li>Foundation Design</li>
                  
                  <li>Steel Structure Design</li>
                  <li>RCC Structure Design</li>
                  
                </ul>
              </Motion.div>
            </div>

            <Motion.div 
              className="service-cta"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Ready to Start Your Project?</h3>
              <p>Contact us today for a free consultation and quote for your structural design needs.</p>
              <div className="cta-buttons">
                <button className="btn-primary">Contact Us</button>
                <button className="btn-secondary">View Portfolio</button>
              </div>
            </Motion.div>
          </div>
        </section>
      </main>
      
    </div>
  )
}

export default StructuralDesignPage
