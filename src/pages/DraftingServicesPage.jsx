import React from 'react'
import { motion as Motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/ServicePage.css'

const DraftingServicesPage = () => {
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
            <img src="/images/building 3.jpg" alt="Drafting Services" />
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
                3D Modeling
              </div>
              <h1>Drafting <span className="highlight">Services</span></h1>
              <p>Professional architectural and structural drafting services for all types of construction projects.</p>
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
                  Our drafting services provide precise and detailed technical drawings for architectural and structural projects. 
                  We use the latest CAD software and industry standards to create accurate drawings that facilitate smooth 
                  construction processes and regulatory approvals.
                </p>
                <p>
                  From initial concept sketches to detailed construction drawings, our experienced drafters ensure every 
                  line, dimension, and annotation meets professional standards and project requirements.
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
                  <li>Architectural Drawings</li>
                  <li>Structural Drawings</li>
                  <li>Construction Details</li>
                  <li>As-Built Drawings</li>
                  <li>2D to 3D Conversion</li>
                  <li>AutoCAD Drafting</li>
                  <li>Tekla Modeling</li>
                  <li>Shop Drawings</li>
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
              <h3>Need Professional Drafting?</h3>
              <p>Get accurate and detailed technical drawings for your construction project.</p>
              <div className="cta-buttons">
                <button className="btn-primary">Contact Us</button>
                <button className="btn-secondary">View Samples</button>
              </div>
            </Motion.div>
          </div>
        </section>
      </main>
      
    </div>
  )
}

export default DraftingServicesPage
