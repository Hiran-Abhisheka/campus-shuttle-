import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Footer.css';

const Footer = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [brandRef, brandVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1, delay: 0 });
  const [linksRef, linksVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1, delay: 200 });
  const [servicesRef, servicesVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1, delay: 400 });
  const [contactRef, contactVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1, delay: 600 });

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Column */}
          <div ref={brandRef} className={`footer-section footer-brand fade-up ${brandVisible ? 'visible' : ''}`}>
            <div className="footer-logo">
              <i className="fas fa-bus"></i>
              <span>Campus Shuttle</span>
            </div>
            <p className="footer-tagline">
              Making campus transportation easy and efficient
            </p>
            <p className="brand-description">
              Your trusted partner for safe, reliable, and comfortable transportation across campus.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/8475550123" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div ref={linksRef} className={`footer-section fade-up ${linksVisible ? 'visible' : ''}`}>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home"><i className="fas fa-chevron-right"></i> Home</a></li>
              <li><a href="#about"><i className="fas fa-chevron-right"></i> About</a></li>
              <li><a href="#contact"><i className="fas fa-chevron-right"></i> Contact</a></li>
              <li><Link to="/download"><i className="fas fa-chevron-right"></i> Download</Link></li>
              <li><a href="#" onClick={handleLoginClick}><i className="fas fa-chevron-right"></i> Login</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div ref={servicesRef} className={`footer-section fade-up ${servicesVisible ? 'visible' : ''}`}>
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/services"><i className="fas fa-chevron-right"></i> Campus Routes</Link></li>
              <li><Link to="/services"><i className="fas fa-chevron-right"></i> Express Shuttle</Link></li>
              <li><Link to="/services"><i className="fas fa-chevron-right"></i> Night Service</Link></li>
              <li><Link to="/services"><i className="fas fa-chevron-right"></i> Event Transportation</Link></li>
              <li><Link to="/services"><i className="fas fa-chevron-right"></i> Accessibility Support</Link></li>
              <li><Link to="/services"><i className="fas fa-chevron-right"></i> Safety Features</Link></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div ref={contactRef} className={`footer-section fade-up ${contactVisible ? 'visible' : ''}`}>
            <h3 className="footer-title">Get In Touch</h3>
            <ul className="footer-contact">
              <li>
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <strong>Location</strong>
                  <span>No. 12, Greenway Road<br />Peradeniya, Kandy, Sri Lanka</span>
                </div>
              </li>
              <li>
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <strong>Phone</strong>
                  <span>(847) 555-0123</span>
                </div>
              </li>
              <li>
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <strong>Email</strong>
                  <span>campusshuttle@mail.com</span>
                </div>
              </li>
              <li>
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-text">
                  <strong>Available</strong>
                  <span>24/7 Service</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Campus Shuttle. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">|</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>

    {/* Login Modal */}
    {showLoginModal && (
      <div className="login-modal-overlay" onClick={closeModal}>
        <div className="login-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>
            <i className="fas fa-times"></i>
          </button>
          
          <h2 className="modal-title">Choose Login Type</h2>
          <p className="modal-subtitle">Select your account type to continue</p>

          <div className="login-options">
            <div className="login-option">
              <div className="login-option-icon rider-icon">
                <i className="fas fa-id-card"></i>
              </div>
              <h3>Rider Login</h3>
              <p>Access driver dashboard and manage routes</p>
              <button className="option-btn rider-btn">
                Continue as Rider
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="login-option">
              <div className="login-option-icon student-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Student Login</h3>
              <p>Track shuttles and book your rides</p>
              <button className="option-btn student-btn">
                Continue as Student
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Footer;