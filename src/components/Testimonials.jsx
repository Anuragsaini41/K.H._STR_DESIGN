import React from 'react'
import '../styles/components/Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">OUR COMMITMENT</h2>
          <p className="testimonials-subtitle">Building Trust Through Quality and Innovation</p>
        </div>

        {/* Commitment Cards */}
        <div className="commitment-cards">
          <div className="commitment-card">
            <div className="commitment-icon">🚀</div>
            <h3>Fresh Perspectives</h3>
            <p>As a new startup, we bring innovative approaches and modern techniques to structural engineering challenges.</p>
          </div>
          <div className="commitment-card">
            <div className="commitment-icon">🎯</div>
            <h3>Expert Knowledge</h3>
            <p>Our team combines theoretical excellence with practical experience to deliver reliable structural solutions.</p>
          </div>
          <div className="commitment-card">
            <div className="commitment-icon">⭐</div>
            <h3>Quality Focus</h3>
            <p>We are committed to maintaining the highest standards of quality and safety in all our engineering work.</p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="values-section">
          <h3 className="values-title">Our Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h4>Precision</h4>
              <p>100% accuracy in all calculations and designs</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Support</h4>
              <p>24*7 availability for project consultations</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🔧</div>
              <h4>Services</h4>
              <p>5+ comprehensive structural engineering services</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✨</div>
              <h4>Satisfaction</h4>
              <p>100% commitment to client satisfaction</p>
            </div>
          </div>
        </div>

        {/* Ready to Start Section */}
        <div className="startup-message">
          <h3>Ready to Build Your Vision</h3>
          <p>
            K.H. STR Design Solution is ready to partner with you on your structural engineering needs. 
            Our team brings fresh ideas, modern approaches, and a commitment to excellence. 
            Let's work together to bring your construction projects to life with precision and innovation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
