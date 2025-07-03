import React from 'react'
import { motion as Motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/ServicePage.css'

const StructuralAnalysisPage = () => {
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
            <img src="/images/building 2.jpg" alt="Structural Analysis" />
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
                Precision Analysis
              </div>
              <h1>Structural <span className="highlight">Analysis</span> Services</h1>
              <p>Comprehensive structural analysis and evaluation for existing and new structures.</p>
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
                  Our structural analysis services provide detailed evaluation of structural systems to ensure safety, 
                  stability, and performance under various loading conditions. We use advanced computational tools 
                  and methodologies to analyze complex structural behaviors.
                </p>
                <p>
                  Whether you need analysis for new construction, renovation, or assessment of existing structures, 
                  our team delivers accurate and reliable results that form the foundation for sound engineering decisions.
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
                  <li>Static Analysis</li>
                  <li>Dynamic Analysis</li>
                  <li>Seismic Analysis</li>
                  <li>Wind Load Analysis</li>
                  <li>Finite Element Analysis (FEA)</li>
                  <li>Modal Analysis</li>
                  <li>Stability Analysis</li>
                  <li>Fatigue Analysis</li>
                </ul>
              </Motion.div>
            </div>

            <Motion.div 
              className="service-process"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Our Process</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4>Data Collection</h4>
                  <p>Gathering structural drawings and material properties</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4>Model Development</h4>
                  <p>Creating accurate 3D structural models</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4>Analysis Execution</h4>
                  <p>Running comprehensive structural analysis</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4>Results & Reporting</h4>
                  <p>Detailed analysis reports with recommendations</p>
                </div>
              </div>
            </Motion.div>

            <Motion.div 
              className="service-cta"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Need Structural Analysis?</h3>
              <p>Get professional structural analysis services with detailed reports and recommendations.</p>
              <div className="cta-buttons">
                <button className="btn-primary">Contact Us</button>
                <button className="btn-secondary">View Case Studies</button>
              </div>
            </Motion.div>
          </div>
        </section>
      </main>
      
    </div>
  )
}

export default StructuralAnalysisPage
