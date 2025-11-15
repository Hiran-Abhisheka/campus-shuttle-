import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-column">
          <div className="footer-logo">Campus Shuttle</div>
          <p className="brand-description">
            Providing safe, reliable, and efficient transportation services for the Northwestern University community.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/routes">Routes</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>No. 12, Greenway Road<br />Peradeniya, Kandy, Sri Lanka</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>(847) 555-0123</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>shuttle@northwestern.edu</span>
            </li>
          </ul>
        </div>

        {/* Operating Hours Column */}
        <div className="footer-column">
          <h3>Operating Hours</h3>
          <ul className="footer-links">
            <li>Monday - Friday: 6:00 AM - 3:00 AM</li>
            <li>Saturday: 8:00 AM - 2:00 AM</li>
            <li>Sunday: 8:00 AM - 1:00 AM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Campus Shuttle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;