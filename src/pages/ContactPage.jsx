import React, { useState, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Clock,
  CheckCircle,
  Calendar,
  Star,
  Send,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import "../styles/pages/ContactPage.css";

const ContactPage = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
    requestCall: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Email.js configuration - You need to get these values from emailjs.com
      const serviceId = "YOUR_EMAILJS_SERVICE_ID"; // e.g. 'gmail'
      const templateId = "YOUR_EMAILJS_TEMPLATE_ID"; // e.g. 'template_abc123'
      const publicKey = "YOUR_EMAILJS_PUBLIC_KEY"; // e.g. 'user_abc123'

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.requirements,
        requestCall: formData.requestCall
          ? "Yes, please call me back"
          : "No need for callback",
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      console.log("Email sent successfully!");
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          requirements: "",
          requestCall: false,
        });
        setIsSubmitting(false);
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError(true);
      setIsSubmitting(false);
      alert(
        "Sorry, there was an error sending your message. Please try again or contact us directly."
      );
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        {/* Floating particles */}
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <MessageCircle size={16} />
              <span>Professional Consultation Available</span>
            </div>
            <h1>
              Get In <span className="highlight">Touch</span>
            </h1>
            <p>
              Ready to start your structural engineering project? Contact us
              today for professional consultation and innovative design
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+91 99917 62005</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>krishan@khstrdesign.com</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Address</h3>
                    <p>
                      238/29 Ground Floor,
                      <br />
                      Opposite to SVN Tower,
                      <br />
                      Near Govt. Girls Sr. Sec. School,
                      <br />
                      Panchwati Colony, Palwal
                      <br />
                      Haryana 121102
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <Clock size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Business Support</h3>
                    <p>All 24 / 7</p>

                    <p>Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Links */}
              <div className="quick-contact">
                <h3>Quick Contact</h3>
                <div className="contact-links">
                  <a
                    href="https://wa.me/919991762005"
                    className="contact-link whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="https://linkedin.com/company/khstrdesign"
                    className="contact-link linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form
                className="contact-form"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 12345 67890"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="requirements">Project Requirements *</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Please describe your project requirements, building type, location, and any specific needs..."
                  ></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="requestCall"
                      checked={formData.requestCall}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    Request a callback for detailed discussion
                  </label>
                </div>

                <button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? "loading" : ""} ${
                    submitSuccess ? "success" : ""
                  } ${submitError ? "error" : ""}`}
                  disabled={isSubmitting || submitSuccess}
                >
                  {submitSuccess ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : submitError ? (
                    <>
                      <AlertCircle size={20} />
                      Try Again
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Image Section */}
      <section className="office-section">
        <div className="container">
          <div className="office-content">
            <div className="office-text">
              <h2>Visit Our Office</h2>
              <p>
                We welcome you to visit our modern office facility equipped with
                the latest design tools and technology. Our team is ready to
                discuss your project requirements in person.
              </p>
              <div className="office-features">
                <div className="feature">
                  <Calendar size={20} />
                  Schedule a Meeting
                </div>
                <div className="feature">
                  <Star size={20} />
                  Professional Consultation
                </div>
                <div className="feature">
                  <CheckCircle size={20} />
                  Free Initial Assessment
                </div>
              </div>
            </div>
            <div className="office-image">
              <img
                src="/images/client.jpg"
                alt="K.H. STR Design Solution Office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8!2d77.3317!3d28.1441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7c7a7b7a7b7a%3A0x7b7a7b7a7b7a7b7a!2sPanchwati%20Colony%2C%20Palwal%2C%20Haryana%20121102!5e0!3m2!1sen!2sin!4v1672531200000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K.H. STR Design Solution Office Location - Palwal, Haryana"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
