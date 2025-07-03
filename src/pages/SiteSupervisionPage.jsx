import React from 'react'
import { motion as Motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/ServicePage.css'

const SiteSupervisionPage = () => {
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
            <img src="/images/building 4.jpg" alt="Site Supervision" />
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
                Construction Excellence
              </div>
              <h1>Site <span className="highlight">Supervision</span></h1>
              <p>Professional site supervision and quality control services for construction projects.</p>
              <Motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7H16.5C17.8807 7 19 5.88071 19 4.5V4.5C19 3.11929 17.8807 2 16.5 2H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  Our site supervision services ensure that construction work is carried out according to approved drawings, 
                  specifications, and industry standards. We provide experienced engineers and supervisors who monitor every 
                  aspect of construction to maintain quality and safety standards.
                </p>
                <p>
                  From foundation to finishing, our supervisors ensure compliance with structural requirements, building codes, 
                  and project timelines while maintaining cost-effectiveness and quality control.
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
                  <li>Quality Control Supervision</li>
                  
                  <li>Safety Compliance</li>
                  
                  <li>Work Method Verification</li>
                  
                  <li>Problem Resolution</li>
                
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
                  <h4>Project Planning</h4>
                  <p>Reviewing drawings and establishing supervision plan</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4>Regular Monitoring</h4>
                  <p>Daily supervision and quality checks</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4>Progress Reporting</h4>
                  <p>Regular progress and quality reports</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4>Final Verification</h4>
                  <p>Final inspection and handover certification</p>
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
              <h3>Need Site Supervision?</h3>
              <p>Ensure quality construction with our professional site supervision services.</p>
              <div className="cta-buttons">
                <button className="btn-primary">Contact Us</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </Motion.div>
          </div>
        </section>
      </main>
      
    </div>
  )
}

export default SiteSupervisionPage
