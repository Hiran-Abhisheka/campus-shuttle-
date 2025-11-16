import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Footer.css';

const Footer = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [loginView, setLoginView] = useState<'select' | 'rider' | 'student'>('select');
  const [signupView, setSignupView] = useState<'select' | 'rider' | 'student'>('select');
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
    setLoginView('select');
  };

  const handleRiderLoginClick = () => {
    setLoginView('rider');
  };

  const handleStudentLoginClick = () => {
    setLoginView('student');
  };

  const handleBackToSelect = () => {
    setLoginView('select');
  };

  const handleRiderSignupClick = () => {
    setSignupView('rider');
  };

  const handleStudentSignupClick = () => {
    setSignupView('student');
  };

  const handleBackToSignupSelect = () => {
    setSignupView('select');
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
    setSignupView('select');
  };

  const switchToSignup = () => {
    setShowLoginModal(false);
    setLoginView('select');
    setTimeout(() => setShowSignupModal(true), 100);
  };

  const switchToLogin = () => {
    setShowSignupModal(false);
    setSignupView('select');
    setTimeout(() => setShowLoginModal(true), 100);
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
          
          {loginView === 'select' && (
            <>
              <h2 className="modal-title">Choose Login Type</h2>
              <p className="modal-subtitle">Select your account type to continue</p>

              <div className="login-options">
                <div className="login-option">
                  <div className="login-option-icon rider-icon">
                    <i className="fas fa-id-card"></i>
                  </div>
                  <h3>Rider Login</h3>
                  <p>Access driver dashboard and manage routes</p>
                  <button className="option-btn rider-btn" onClick={handleRiderLoginClick}>
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
                  <button className="option-btn student-btn" onClick={handleStudentLoginClick}>
                    Continue as Student
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </>
          )}

          {loginView === 'rider' && (
            <>
              <button className="back-btn" onClick={handleBackToSelect}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <h2 className="modal-title">Rider Login</h2>
              <p className="modal-subtitle">Welcome back! Please enter your details</p>

              <form className="login-form">
                <div className="form-group">
                  <label htmlFor="footer-rider-email">
                    <i className="fas fa-envelope"></i> Email Address
                  </label>
                  <input
                    type="email"
                    id="footer-rider-email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="footer-rider-password">
                    <i className="fas fa-lock"></i> Password
                  </label>
                  <input
                    type="password"
                    id="footer-rider-password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" className="submit-btn">
                  Login as Rider
                  <i className="fas fa-sign-in-alt"></i>
                </button>

                <p className="form-footer">
                  Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToSignup(); }}>Sign up</a>
                </p>
              </form>
            </>
          )}

          {loginView === 'student' && (
            <>
              <button className="back-btn" onClick={handleBackToSelect}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <h2 className="modal-title">Student Login</h2>
              <p className="modal-subtitle">Welcome back! Please enter your details</p>

              <form className="login-form">
                <div className="form-group">
                  <label htmlFor="footer-student-email">
                    <i className="fas fa-envelope"></i> Email Address
                  </label>
                  <input
                    type="email"
                    id="footer-student-email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="footer-student-password">
                    <i className="fas fa-lock"></i> Password
                  </label>
                  <input
                    type="password"
                    id="footer-student-password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" className="submit-btn">
                  Login as Student
                  <i className="fas fa-sign-in-alt"></i>
                </button>

                <p className="form-footer">
                  Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToSignup(); }}>Sign up</a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    )}

    {/* Signup Modal */}
    {showSignupModal && (
      <div className="login-modal-overlay" onClick={closeSignupModal}>
        <div className="login-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeSignupModal}>
            <i className="fas fa-times"></i>
          </button>
          
          {signupView === 'select' && (
            <>
              <h2 className="modal-title">Choose Signup Type</h2>
              <p className="modal-subtitle">Select your account type to register</p>

              <div className="login-options">
                <div className="login-option">
                  <div className="login-option-icon rider-icon">
                    <i className="fas fa-id-card"></i>
                  </div>
                  <h3>Rider Signup</h3>
                  <p>Register as a driver and start earning</p>
                  <button className="option-btn rider-btn" onClick={handleRiderSignupClick}>
                    Signup as Rider
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>

                <div className="login-option">
                  <div className="login-option-icon student-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3>Student Signup</h3>
                  <p>Register to track and book shuttle rides</p>
                  <button className="option-btn student-btn" onClick={handleStudentSignupClick}>
                    Signup as Student
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </>
          )}

          {signupView === 'rider' && (
            <>
              <button className="back-btn" onClick={handleBackToSignupSelect}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <h2 className="modal-title">Rider Signup</h2>
              <p className="modal-subtitle">Create your rider account</p>

              <form className="login-form signup-form-extended">
                {/* Personal Details Section */}
                <div className="form-section">
                  <h3 className="section-heading">
                    <i className="fas fa-user-circle"></i> Personal Details
                  </h3>
                  <div className="form-group">
                    <label htmlFor="footer-rider-signup-name">
                      <i className="fas fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="footer-rider-signup-name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="footer-rider-signup-phone">
                      <i className="fas fa-phone"></i> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="footer-rider-signup-phone"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="footer-rider-signup-email">
                      <i className="fas fa-envelope"></i> Email Address
                    </label>
                    <input
                      type="email"
                      id="footer-rider-signup-email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="footer-rider-signup-password">
                      <i className="fas fa-lock"></i> Password
                    </label>
                    <input
                      type="password"
                      id="footer-rider-signup-password"
                      placeholder="Create a password"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="footer-rider-signup-confirm-password">
                      <i className="fas fa-lock"></i> Confirm Password
                    </label>
                    <input
                      type="password"
                      id="footer-rider-signup-confirm-password"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>

                {/* License and Documents Section */}
                <div className="form-section">
                  <h3 className="section-heading">
                    <i className="fas fa-id-card"></i> License & Documents
                  </h3>
                  <div className="form-group">
                    <label htmlFor="footer-rider-license-number">
                      <i className="fas fa-id-badge"></i> Driver's License Number
                    </label>
                    <input
                      type="text"
                      id="footer-rider-license-number"
                      placeholder="Enter your license number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="footer-rider-license-upload">
                      <i className="fas fa-upload"></i> Upload License
                    </label>
                    <input
                      type="file"
                      id="footer-rider-license-upload"
                      accept="image/*,.pdf"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="footer-rider-vehicle-doc-upload">
                      <i className="fas fa-upload"></i> Upload Vehicle Document
                    </label>
                    <input
                      type="file"
                      id="footer-rider-vehicle-doc-upload"
                      accept="image/*,.pdf"
                      required
                    />
                  </div>
                </div>

                {/* Vehicle Details Section */}
                <div className="form-section">
                  <h3 className="section-heading">
                    <i className="fas fa-car"></i> Vehicle Details
                  </h3>
                  <div className="form-group">
                    <label htmlFor="footer-rider-vehicle-type">
                      <i className="fas fa-shuttle-van"></i> Vehicle Type
                    </label>
                    <select id="footer-rider-vehicle-type" required>
                      <option value="">Select vehicle type</option>
                      <option value="bus">Bus</option>
                      <option value="minibus">Minibus</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="footer-rider-vehicle-number">
                      <i className="fas fa-hashtag"></i> Vehicle Number
                    </label>
                    <input
                      type="text"
                      id="footer-rider-vehicle-number"
                      placeholder="Enter vehicle registration number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="footer-rider-seats">
                      <i className="fas fa-chair"></i> Number of Seats
                    </label>
                    <input
                      type="number"
                      id="footer-rider-seats"
                      placeholder="Enter number of seats"
                      min="1"
                      max="50"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  Create Rider Account
                  <i className="fas fa-user-plus"></i>
                </button>

                <p className="form-footer">
                  Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToLogin(); }}>Login</a>
                </p>
              </form>
            </>
          )}

          {signupView === 'student' && (
            <>
              <button className="back-btn" onClick={handleBackToSignupSelect}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <h2 className="modal-title">Student Signup</h2>
              <p className="modal-subtitle">Create your student account</p>

              <form className="login-form">
                <div className="form-group">
                  <label htmlFor="footer-student-signup-name">
                    <i className="fas fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="footer-student-signup-name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="footer-student-signup-email">
                    <i className="fas fa-envelope"></i> Email Address
                  </label>
                  <input
                    type="email"
                    id="footer-student-signup-email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="footer-student-signup-password">
                    <i className="fas fa-lock"></i> Password
                  </label>
                  <input
                    type="password"
                    id="footer-student-signup-password"
                    placeholder="Create a password"
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Create Student Account
                  <i className="fas fa-user-plus"></i>
                </button>

                <p className="form-footer">
                  Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToLogin(); }}>Login</a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    )}
    </>
  );
};

export default Footer;