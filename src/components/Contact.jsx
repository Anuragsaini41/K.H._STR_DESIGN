import React, { useState, useRef } from 'react'
import { motion as Motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import '../styles/components/Contact.css'

const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    
    try {
      // Email.js configuration - You need to get these values from emailjs.com
      const serviceId = 'YOUR_EMAILJS_SERVICE_ID'  // e.g. 'gmail'
      const templateId = 'YOUR_EMAILJS_TEMPLATE_ID' // e.g. 'template_abc123'
      const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'  // e.g. 'user_abc123'
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        service: formData.service,
        message: formData.message
      }
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      console.log('Email sent successfully!')
      setSubmitSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
        setIsSubmitting(false)
        setSubmitSuccess(false)
      }, 3000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitError(true)
      setIsSubmitting(false)
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.')
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9991762005",
      delay: 0.1
    },
    {
      icon: Mail,
      title: "Email", 
      value: "krishan@khstrdesign.com",
      delay: 0.2
    },
    {
      icon: MapPin,
      title: "Address",
      value: "238/29 Ground Floor, Opposite to SVN Tower, Near Govt. Girls Sr. Sec. School, Panchwati Colony, Palwal, Haryana - 121102",
      delay: 0.3
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <Motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Motion.div 
            className="section-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </Motion.div>
          <h2>Get In Touch</h2>
          <p>Ready to Start Your Project? Let's discuss your structural engineering needs.</p>
        </Motion.div>
        
        <div className="contact-content">
          <Motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Contact Information</h3>
            <p className="contact-subtitle">Get in touch with our structural engineering experts</p>
            
            {contactInfo.map((item, index) => (
              <Motion.div 
                key={index}
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + item.delay }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="contact-icon">
                  <item.icon />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </Motion.div>
            ))}
            
            <Motion.div 
              className="contact-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h4>Business Hours</h4>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: By Appointment</p>
            </Motion.div>
          </Motion.div>

          <Motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            
            <h3>Send us a Message</h3>
            <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
            
            <div className="form-row">
              <Motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </Motion.div>
              
              <Motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </Motion.div>
            </div>
            
            <div className="form-row">
              <Motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Your Phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </Motion.div>
              
              <Motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="structural-design">Structural Design</option>
                  <option value="structural-analysis">Structural Analysis</option>
                  <option value="drafting">Drafting Services</option>
                  <option value="supervision">Site Supervision</option>
                  <option value="audit">Structural Audit</option>
                </select>
              </Motion.div>
            </div>
            
            <Motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <textarea 
                name="message"
                placeholder="Tell us about your project requirements..." 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </Motion.div>
            
            <Motion.button 
              type="submit" 
              className={`btn-primary ${isSubmitting || submitSuccess ? 'disabled' : ''} ${submitError ? 'error' : ''}`}
              disabled={isSubmitting || submitSuccess}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileHover={{ scale: isSubmitting || submitSuccess ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting || submitSuccess ? 1 : 0.98 }}
            >
              {submitSuccess ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              ) : submitError ? (
                <>
                  <Send size={18} />
                  Try Again
                </>
              ) : isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </Motion.button>
          </Motion.form>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="container">
        <Motion.div 
          className="map-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Find Us</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8!2d77.3317!3d28.1441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7c7a7b7a7b7a%3A0x7b7a7b7a7b7a7b7a!2sPanchwati%20Colony%2C%20Palwal%2C%20Haryana%20121102!5e0!3m2!1sen!2sin!4v1672531200000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K.H. STR Design Office Location - Palwal, Haryana"
            ></iframe>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default Contact
