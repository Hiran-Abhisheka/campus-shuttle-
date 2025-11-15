import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/AboutUs.css';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const featureCards: FeatureCard[] = [
  {
    icon: "fa-map-marked-alt",
    title: "Real-time Tracking",
    description: "Track your shuttle in real-time with live GPS updates and accurate arrival times.",
    delay: 200
  },
  {
    icon: "fa-bell",
    title: "Instant Alerts",
    description: "Get notifications about your ride status, delays, and schedule changes instantly.",
    delay: 400
  },
  {
    icon: "fa-mobile-alt",
    title: "Easy Booking",
    description: "Book your campus shuttle rides with just a few taps on your smartphone.",
    delay: 600
  },
  {
    icon: "fa-shield-alt",
    title: "Safe & Secure",
    description: "Enhanced security features with verified drivers and real-time monitoring.",
    delay: 800
  }
];

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="about-bg-overlay"></div>
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Us</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Making campus transportation easy and efficient
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-main">
            <div className="about-left">
              <div className="about-description">
                <p>
                  The Campus Shuttle Service is a modern web application built to simplify university transportation. 
                  Our goal is to create a safer, faster, and more connected travel experience for students. 
                  With features like real-time shuttle tracking, instant ride booking, and automated email alerts 
                  for parents, we bring Uber-like convenience right to your campus. Designed for students, drivers, 
                  and administrators, this platform ensures smooth communication, safety, and efficiency all in one place.
                </p>
              </div>

              <div className="impact-section">
                <h3 className="impact-title">Our Impact</h3>
                <div className="impact-cards">
                  <div className="impact-card">
                    <div className="impact-icon">
                      <i className="fas fa-bus"></i>
                      <span className="impact-number">50+</span>
                    </div>
                    <div className="impact-details">
                      <h4>Active Drivers</h4>
                      <p>Professional drivers serving our campus community</p>
                    </div>
                  </div>
                  
                  <div className="impact-card">
                    <div className="impact-icon">
                      <i className="fas fa-star"></i>
                      <span className="impact-number">95%</span>
                    </div>
                    <div className="impact-details">
                      <h4>Satisfaction Rate</h4>
                      <p>Students love our reliable service</p>
                    </div>
                  </div>
                  
                  <div className="impact-card">
                    <div className="impact-icon">
                      <i className="fas fa-users"></i>
                      <span className="impact-number">15K+</span>
                    </div>
                    <div className="impact-details">
                      <h4>Monthly Users</h4>
                      <p>Active students using our platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="features-grid">
              {featureCards.map((card, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <i className={`fas ${card.icon}`}></i>
                  </div>
                  <div className="feature-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;