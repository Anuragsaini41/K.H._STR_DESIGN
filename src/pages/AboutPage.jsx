import React from 'react'
import { Clock, Shield, Users, Award, CheckCircle, Phone, MapPin, Mail, Sparkles } from 'lucide-react'
import '../styles/pages/AboutPage.css'

const AboutPage = () => {
  const features = [
    {
      icon: <Users className="feature-icon" />,
      title: "Versatile Collaboration Approaches",
      description: "We work closely with clients to understand their unique requirements and deliver customized solutions."
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Streamlining Project Timelines and Expenses",
      description: "Efficient project management ensuring timely delivery within budget constraints."
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Ensuring Rigorous Security Protocols",
      description: "Maintaining highest safety standards and security protocols in all our projects."
    },
    {
      icon: <Award className="feature-icon" />,
      title: "Top-Tier, Highly Skilled Professionals",
      description: "Our team consists of experienced and certified structural engineers."
    },
    {
      icon: <CheckCircle className="feature-icon" />,
      title: "100% Assured Quality",
      description: "We guarantee the highest quality standards in all our structural engineering solutions."
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Timely Delivery",
      description: "Committed to delivering projects on time without compromising on quality."
    },
    {
      icon: <Award className="feature-icon" />,
      title: "Conformance to International Codes",
      description: "All our designs comply with international building codes and standards."
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Globally Accepted Standard Operating Procedures",
      description: "Following internationally recognized procedures and best practices."
    }
  ]

  const stats = [
    { number: "3+", label: "Services Offered" },
    { number: "5+", label: "Consultations Completed" },
    { number: "100%", label: "Commitment to Excellence" }
  ]

  const services = [
    {
      title: "Structural Design",
      description: "Comprehensive structural design solutions for residential, commercial, and industrial projects using advanced engineering principles.",
      image: "/images/building 1.jpg"
    },
    
    {
      title: "Structural Audit",
      description: "Professional evaluation of existing structures to assess integrity, safety, and compliance with current standards.",
      image: "/images/building 3.jpg"
    },
    {
      title: "Site Supervision",
      description: "On-site structural supervision to ensure proper implementation of designs and quality standards.",
      image: "/images/building 4.jpg"
    },
    {
      title: "Drafting Services",
      description: "Professional structural drafting and detailed drawings for construction and fabrication purposes.",
      image: "/images/building 3.jpg"
    }
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
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
              <Sparkles size={16} />
              <span>Structural Engineering Excellence</span>
            </div>
          <h1>About <span className="highlight">K.H. STR Design Solution</span></h1>
          <p>Innovative Start-up Bringing Fresh Perspectives to Structural Steel Design with Innovation, Precision, and Modern Approaches</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section">
        <div className="container">
          <h2>About K.H. STR Design Solution</h2>
          <div className="about-content">
            <p>
              K.H. STR Design Solution is an emerging structural engineering consultancy firm dedicated to 
              providing innovative and reliable structural solutions. Founded with a passion for 
              excellence in structural engineering, we aim to become a trusted partner for clients 
              seeking fresh perspectives in structural design and engineering services.
            </p>
            <p>
              Our focus spans across residential, commercial, and industrial projects. We 
              leverage cutting-edge technology and modern industry practices to develop cost-effective, 
              safe, and durable structural solutions designed to meet and exceed client expectations.
            </p>
          </div>
          
          {/* Startup Message - styled more elegantly */}
          <div className="startup-message-content">
            <div className="startup-badge">
              <Sparkles size={16} />
              <span>New Vision in Structural Engineering</span>
            </div>
            <h2>Our Journey Has Just Begun</h2>
            <p>
              As a newly established structural engineering startup, K.H. STR Design Solution represents 
              the beginning of an exciting journey in the field of structural engineering. 
              What we may lack in years of operation, we make up for with fresh perspectives, 
              up-to-date technical knowledge, and an unwavering commitment to innovation.
            </p>
            <p>
              Our team brings together educational excellence, theoretical expertise, and 
              a passion for modern engineering solutions. We're eager to collaborate with clients 
              who value new ideas, personalized attention, and the opportunity to work with a 
              growing firm that's dedicated to making its mark in the industry.
            </p>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            At K.H. STR Design Solution, our mission is to bring fresh perspectives to structural engineering
            solutions that ensure safety, functionality, and aesthetic appeal. We are committed 
            to using innovative design approaches and modern technology to create structures 
            that are built to last while meeting the unique requirements of each project.
          </p>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="core-services-section">
        <div className="container">
          <h2>Our Core Services</h2>
          <p>We provide comprehensive structural engineering solutions using advanced technology and expertise.</p>
          
          <div className="services-scroll-container">
            <div className="services-grid">
              {/* Duplicate services for continuous scroll effect */}
              {[...services, ...services].map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2>Our Philosophy</h2>
              <p>
                At K.H. STR Design Solution, we believe in building strong relationships with our clients 
                through transparency, reliability, and excellence. Our approach is centered on 
                understanding each client's unique vision and translating it into safe, efficient, 
                and cost-effective structural solutions. As a new startup, we bring fresh ideas and 
                innovative approaches to every project, unencumbered by outdated methodologies.
              </p>
            </div>
            <div className="philosophy-image">
              <img src="/images/client.jpg" alt="Our Philosophy" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2>Connect with K.H. STR Design Solution</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <Phone className="contact-icon" />
              <h3>Primary Contact</h3>
              <p>+91 99917 62005</p>
              
            </div>
            <div className="contact-card">
              <Phone className="contact-icon" />
              <h3>Support Team</h3>
              <p>+91 99917 62005</p>
              
            </div>
            <div className="contact-card">
              <MapPin className="contact-icon" />
              <h3>Office Address</h3>
              <p>238/29 Ground Floor, Opposite to SVN Tower, Near Govt. Girls Sr. Sec. School, Panchwati Colony, Palwal, Haryana - 121102</p>
            </div>
            <div className="contact-card">
              <Mail className="contact-icon" />
              <h3>Email</h3>
              <p>krishan@khstrdesign.com</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Start Your Journey with K.H. STR Design Solution</h2>
          <p className="cta-subtitle">Get in touch for a consultation on your structural engineering needs</p>
          <button className="cta-button">Schedule a Consultation</button>
        </div>
      </section>


    </div>
  )
}

export default AboutPage
