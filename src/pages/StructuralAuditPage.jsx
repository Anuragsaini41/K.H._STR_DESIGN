import React from 'react'
import { motion as Motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/ServicePage.css'

const StructuralAuditPage = () => {
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
            <img src="/images/building 5.jpg" alt="Structural Audit" />
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
                Safety Assessment
              </div>
              <h1>Structural <span className="highlight">Audit</span></h1>
              <p>Thorough structural audits for existing buildings – non-destructive testing, safety recommendations.</p>
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
                  Our structural audit services provide comprehensive evaluation of existing buildings to assess their 
                  structural integrity, safety, and performance. We use advanced non-destructive testing methods and 
                  visual inspections to identify potential issues and recommend appropriate remedial measures.
                </p>
                <p>
                  Whether for old buildings, post-disaster assessment, or pre-purchase evaluation, our detailed audits 
                  help property owners make informed decisions about structural safety and maintenance requirements.
                </p>
              </Motion.div>
            </div>

            <Motion.div 
              className="service-cta"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Need Structural Audit?</h3>
              <p>Ensure your building's safety with our comprehensive structural audit services.</p>
              <div className="cta-buttons">
                <button className="btn-primary">Contact Us</button>
                <button className="btn-secondary">View Reports</button>
              </div>
            </Motion.div>
          </div>
        </section>
      </main>

      
    </div>
  )
}

export default StructuralAuditPage
