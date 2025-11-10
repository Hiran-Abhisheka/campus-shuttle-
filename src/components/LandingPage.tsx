import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function LandingPage() {
  const [headingRef1, heading1Visible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const [headingRef2, heading2Visible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2, delay: 300 });
  const [headingRef3, heading3Visible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2, delay: 600 });
  const [taglineRef, taglineVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 900 });
  const [loginRef, loginVisible] = useScrollAnimation<HTMLAnchorElement>({ threshold: 0.2, delay: 1200 });
  const [signupRef, signupVisible] = useScrollAnimation<HTMLAnchorElement>({ threshold: 0.2, delay: 1500 });

  return (
    <section id="home" className="landing-page">
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
            <Link 
              ref={loginRef}
              to="/login" 
              className={`login-btn-main fade-up ${loginVisible ? 'visible' : ''}`}
            >
              LOGIN
            </Link>
            <Link 
              ref={signupRef}
              to="/signup" 
              className={`signup-btn-main fade-up ${signupVisible ? 'visible' : ''}`}
            >
              SIGNUP
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}