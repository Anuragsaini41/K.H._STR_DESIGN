import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { Menu, X, ChevronDown } from 'lucide-react'
import '../styles/components/Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header modern-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="header-contact-info">
            <a href="tel:+919991762005" className="header-contact-item">
              <FaPhone className="header-contact-icon" style={{color: '#dc2626 !important', fill: '#dc2626'}} />
              <span>+91 9991762005</span>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=krishan@khstrdesign.com" target="_blank" className="header-contact-item">
              <FaEnvelope className="header-contact-icon" style={{color: '#dc2626 !important', fill: '#dc2626'}} />
              <span>krishan@khstrdesign.com</span>
            </a>
            <a href="https://maps.app.goo.gl/mRaUqis8YwekWBE7A" target="_blank" rel="noopener noreferrer" className="header-contact-item">
              <FaMapMarkerAlt className="header-contact-icon" style={{color: '#dc2626 !important', fill: '#dc2626'}} />
              <span>Palwal, Haryana</span>
            </a>
          </div>
          <div className="header-actions">
            <a 
              href="https://wa.me/919991762005" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-btn"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <div className="logo-glow"></div>
            <img 
              src="/images/logo/logo.png" 
              alt="K.H. STR Design Solution Logo"
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <span className="logo-fallback" style={{ display: 'none' }}>
              <span style={{ color: '#0000FF', fontWeight: 'bold' }}>K.H. STR</span>
              <span style={{ color: '#FF0000', fontWeight: 'bold' }}>DESIGN</span>
              <span style={{ color: '#4F46E5', fontWeight: 'bold' }}>SOLUTION</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="nav-menu desktop-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" onClick={(e) => e.preventDefault()}>
                Services
                <ChevronDown size={16} style={{ opacity: 0.8, marginLeft: '5px', transition: 'transform 0.3s ease' }} />
              </a>
              <div className="dropdown-menu" style={{ left: '0', transform: 'none' }}>
                <Link to="/services/structural-design" className="dropdown-item">Structural Design</Link>
                <Link to="/services/drafting-services" className="dropdown-item">Drafting Services</Link>
                <Link to="/services/site-supervision" className="dropdown-item">Site Supervision</Link>
                <Link to="/services/structural-audit" className="dropdown-item">Structural Audit</Link>
              </div>
            </li>
            <li>
              <a 
                href="#projects" 
                className="nav-link" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects
              </a>
            </li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA Button */}
          <div className="nav-cta">
            <Link to="/contact" className="btn-primary connect-now">Connect Now</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <div className="mobile-services-section">
            <span className="mobile-section-title">Services</span>
            <Link to="/services/structural-design" className="mobile-nav-link sub-link" onClick={() => setIsMobileMenuOpen(false)}>
              Structural Design
            </Link>
            <Link to="/services/drafting-services" className="mobile-nav-link sub-link" onClick={() => setIsMobileMenuOpen(false)}>
              Drafting Services
            </Link>
            <Link to="/services/site-supervision" className="mobile-nav-link sub-link" onClick={() => setIsMobileMenuOpen(false)}>
              Site Supervision
            </Link>
            <Link to="/services/structural-audit" className="mobile-nav-link sub-link" onClick={() => setIsMobileMenuOpen(false)}>
              Structural Audit
            </Link>
          </div>
          <a 
            href="#projects" 
            className="mobile-nav-link" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            Projects
          </a>
          <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/contact" className="btn-primary mobile-cta connect-now" onClick={() => setIsMobileMenuOpen(false)}>Connect Now</Link>
          <a 
            href="https://wa.me/919991762005" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-whatsapp-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
