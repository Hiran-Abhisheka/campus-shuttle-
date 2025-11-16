import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function LandingPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [headingRef1, heading1Visible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const [headingRef2, heading2Visible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2, delay: 300 });
  const [headingRef3, heading3Visible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2, delay: 600 });
  const [taglineRef, taglineVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 900 });
  const [loginRef, loginVisible] = useScrollAnimation<HTMLButtonElement>({ threshold: 0.2, delay: 1200 });
  const [signupRef, signupVisible] = useScrollAnimation<HTMLButtonElement>({ threshold: 0.2, delay: 1500 });

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const handleSignupClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSignupModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  return (
    <>
      <section id="home" className="landing-page">
        <div className="landing-bg-image"></div>
        <div className="content">
          <div className="left-side">
            <h2 
              ref={headingRef1} 
              className={`header-university fade-right ${heading1Visible ? 'visible' : ''}`}
            >
              University
            </h2>
            <h2 
              ref={headingRef2} 
              className={`header-shuttle fade-right ${heading2Visible ? 'visible' : ''}`}
            >
              Shuttle
            </h2>
            <h2 
              ref={headingRef3} 
              className={`header-service fade-right ${heading3Visible ? 'visible' : ''}`}
            >
              Service
            </h2>
            <div 
              ref={taglineRef} 
              className={`header-tagline fade-up ${taglineVisible ? 'visible' : ''}`}
            >
              Ride smart. Track live. Stay connected on campus.
            </div>
            <div className="buttons-container">
              <button 
                ref={loginRef}
                onClick={handleLoginClick}
                className={`login-btn-main fade-up ${loginVisible ? 'visible' : ''}`}
              >
                LOGIN
              </button>
              <button 
                ref={signupRef}
                onClick={handleSignupClick}
                className={`signup-btn-main fade-up ${signupVisible ? 'visible' : ''}`}
              >
                SIGNUP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="login-modal-overlay" onClick={closeLoginModal}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeLoginModal}>
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

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="login-modal-overlay" onClick={closeSignupModal}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeSignupModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <h2 className="modal-title">Choose Signup Type</h2>
            <p className="modal-subtitle">Select your account type to register</p>

            <div className="login-options">
              <div className="login-option">
                <div className="login-option-icon rider-icon">
                  <i className="fas fa-id-card"></i>
                </div>
                <h3>Rider Signup</h3>
                <p>Register as a driver and start earning</p>
                <button className="option-btn rider-btn">
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
                <button className="option-btn student-btn">
                  Signup as Student
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}