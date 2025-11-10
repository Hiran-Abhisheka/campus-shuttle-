import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutUs = () => {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [descRef, descVisible] = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const [statsRef, statsVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [imageRef, imageVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="about" className="section">
      <h2 
        ref={headerRef} 
        className={`about-header fade-down ${headerVisible ? 'visible' : ''}`}
      >
        About Us
      </h2>
      <div 
        ref={contentRef} 
        className={`about-content ${contentVisible ? 'visible' : ''}`}
      >
        <div 
          ref={imageRef} 
          className={`about-image-container fade-right ${imageVisible ? 'visible' : ''}`}
        >
          <img src="/src/backgrounds/about page.png" alt="About Us" className="about-image" />
        </div>
        <div className="about-text-content">
          <p 
            ref={descRef} 
            className={`about-description fade-left ${descVisible ? 'visible' : ''}`}
          >
            The Campus Shuttle Service is a modern web application built to simplify university transportation. Our goal is to create a safer, faster, and more connected travel experience for students. With features like real-time shuttle tracking, instant ride booking, and automated email alerts for parents, we bring Uber-like convenience right to your campus. Designed for students, drivers, and administrators, this platform ensures smooth communication, safety, and efficiency all in one place.
          </p>
          <div 
            ref={statsRef} 
            className={`stats-container fade-up ${statsVisible ? 'visible' : ''}`}
          >
            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Active Drivers</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">95%</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;