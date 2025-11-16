import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

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
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="nav-logo">
            <i className="fas fa-bus"></i>
            <span>Campus Shuttle</span>
          </Link>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#contact" className="nav-link">Contact</a>
            <Link to="/download" className="nav-link">Download</Link>
            <button onClick={handleLoginClick} className="nav-button">Login</button>
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

export default Navbar;