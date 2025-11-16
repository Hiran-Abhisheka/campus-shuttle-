import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginView, setLoginView] = useState<'select' | 'rider' | 'student'>('select');
  const [signupView, setSignupView] = useState<'select' | 'rider' | 'student'>('select');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
    setLoginView('select');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleRiderLogin = () => {
    setLoginView('rider');
  };

  const handleStudentLogin = () => {
    setLoginView('student');
  };

  const goBackToSelect = () => {
    setLoginView('select');
  };

  const handleRiderSignup = () => {
    setSignupView('rider');
  };

  const handleStudentSignup = () => {
    setSignupView('student');
  };

  const goBackToSignupSelect = () => {
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
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="nav-logo">
            <i className="fas fa-bus"></i>
            <span>Campus Shuttle</span>
          </Link>
          <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a>
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>About Us</a>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
            <Link to="/download" className="nav-link" onClick={closeMobileMenu}>Download</Link>
            <button onClick={(e) => { handleLoginClick(e); closeMobileMenu(); }} className="nav-button">Login</button>
          </div>
        </div>
      </nav>

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
                    <button className="option-btn rider-btn" onClick={handleRiderLogin}>
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
                    <button className="option-btn student-btn" onClick={handleStudentLogin}>
                      Continue as Student
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </>
            )}

            {loginView === 'rider' && (
              <>
                <button className="back-btn" onClick={goBackToSelect}>
                  <i className="fas fa-arrow-left"></i>
                </button>
                <h2 className="modal-title">Rider Login</h2>
                <p className="modal-subtitle">Sign in to your rider account</p>

                <form className="login-form">
                  <div className="form-group">
                    <label htmlFor="rider-email">
                      <i className="fas fa-envelope"></i>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="rider-email" 
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="rider-password">
                      <i className="fas fa-lock"></i>
                      Password
                    </label>
                    <input 
                      type="password" 
                      id="rider-password" 
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

                  <button type="submit" className="submit-btn rider-submit">
                    <i className="fas fa-sign-in-alt"></i>
                    Login as Rider
                  </button>

                  <p className="signup-link">
                    Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToSignup(); }}>Sign up</a>
                  </p>
                </form>
              </>
            )}

            {loginView === 'student' && (
              <>
                <button className="back-btn" onClick={goBackToSelect}>
                  <i className="fas fa-arrow-left"></i>
                </button>
                <h2 className="modal-title">Student Login</h2>
                <p className="modal-subtitle">Sign in to your student account</p>

                <form className="login-form">
                  <div className="form-group">
                    <label htmlFor="student-email">
                      <i className="fas fa-envelope"></i>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="student-email" 
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="student-password">
                      <i className="fas fa-lock"></i>
                      Password
                    </label>
                    <input 
                      type="password" 
                      id="student-password" 
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

                  <button type="submit" className="submit-btn student-submit">
                    <i className="fas fa-sign-in-alt"></i>
                    Login as Student
                  </button>

                  <p className="signup-link">
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
                    <button className="option-btn rider-btn" onClick={handleRiderSignup}>
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
                    <button className="option-btn student-btn" onClick={handleStudentSignup}>
                      Signup as Student
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </>
            )}

            {signupView === 'rider' && (
              <>
                <button className="back-btn" onClick={goBackToSignupSelect}>
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
                      <label htmlFor="nav-rider-signup-name">
                        <i className="fas fa-user"></i>
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        id="nav-rider-signup-name" 
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="nav-rider-signup-phone">
                        <i className="fas fa-phone"></i>
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="nav-rider-signup-phone" 
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="nav-rider-signup-email">
                        <i className="fas fa-envelope"></i>
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="nav-rider-signup-email" 
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="nav-rider-signup-password">
                        <i className="fas fa-lock"></i>
                        Password
                      </label>
                      <input 
                        type="password" 
                        id="nav-rider-signup-password" 
                        placeholder="Create a password"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="nav-rider-signup-confirm-password">
                        <i className="fas fa-lock"></i>
                        Confirm Password
                      </label>
                      <input 
                        type="password" 
                        id="nav-rider-signup-confirm-password" 
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
                      <label htmlFor="nav-rider-license-number">
                        <i className="fas fa-id-badge"></i>
                        Driver's License Number
                      </label>
                      <input 
                        type="text" 
                        id="nav-rider-license-number" 
                        placeholder="Enter your license number"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="nav-rider-license-upload">
                        <i className="fas fa-upload"></i>
                        Upload License
                      </label>
                      <input 
                        type="file" 
                        id="nav-rider-license-upload" 
                        accept="image/*,.pdf"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="nav-rider-vehicle-doc-upload">
                        <i className="fas fa-upload"></i>
                        Upload Vehicle Document
                      </label>
                      <input 
                        type="file" 
                        id="nav-rider-vehicle-doc-upload" 
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
                      <label htmlFor="nav-rider-vehicle-type">
                        <i className="fas fa-shuttle-van"></i>
                        Vehicle Type
                      </label>
                      <select 
                        id="nav-rider-vehicle-type"
                        required
                      >
                        <option value="">Select vehicle type</option>
                        <option value="bus">Bus</option>
                        <option value="minibus">Minibus</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="nav-rider-vehicle-number">
                        <i className="fas fa-hashtag"></i>
                        Vehicle Number
                      </label>
                      <input 
                        type="text" 
                        id="nav-rider-vehicle-number" 
                        placeholder="Enter vehicle registration number"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="nav-rider-seats">
                        <i className="fas fa-chair"></i>
                        Number of Seats
                      </label>
                      <input 
                        type="number" 
                        id="nav-rider-seats" 
                        placeholder="Enter number of seats"
                        min="1"
                        max="50"
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="submit-btn rider-submit">
                    <i className="fas fa-user-plus"></i>
                    Create Rider Account
                  </button>

                  <p className="signup-link">
                    Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToLogin(); }}>Login</a>
                  </p>
                </form>
              </>
            )}

            {signupView === 'student' && (
              <>
                <button className="back-btn" onClick={goBackToSignupSelect}>
                  <i className="fas fa-arrow-left"></i>
                </button>
                <h2 className="modal-title">Student Signup</h2>
                <p className="modal-subtitle">Create your student account</p>

                <form className="login-form">
                  <div className="form-group">
                    <label htmlFor="nav-student-signup-name">
                      <i className="fas fa-user"></i>
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="nav-student-signup-name" 
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="nav-student-signup-email">
                      <i className="fas fa-envelope"></i>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="nav-student-signup-email" 
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="nav-student-signup-password">
                      <i className="fas fa-lock"></i>
                      Password
                    </label>
                    <input 
                      type="password" 
                      id="nav-student-signup-password" 
                      placeholder="Create a password"
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn student-submit">
                    <i className="fas fa-user-plus"></i>
                    Create Student Account
                  </button>

                  <p className="signup-link">
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

export default Navbar;