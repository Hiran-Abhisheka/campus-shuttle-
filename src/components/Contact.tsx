import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const [formRef, formVisible] = useScrollAnimation<HTMLFormElement>({ threshold: 0.2 });
  const [nameRef, nameVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 200 });
  const [emailRef, emailVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 400 });
  const [messageRef, messageVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 600 });
  const [buttonRef, buttonVisible] = useScrollAnimation<HTMLButtonElement>({ threshold: 0.2, delay: 800 });

  return (
    <section id="contact" className="section">
      <div className="contact-content">
        <h2 
          ref={headerRef}
          className={`contact-header fade-down ${headerVisible ? 'visible' : ''}`}
        >
          Contact Us
        </h2>
        
        <form 
          ref={formRef}
          className={`contact-form fade-up ${formVisible ? 'visible' : ''}`}
        >
          <div 
            ref={nameRef}
            className={`form-group fade-right ${nameVisible ? 'visible' : ''}`}
          >
            <input
              type="text"
              className="form-input"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div 
            ref={emailRef}
            className={`form-group fade-right ${emailVisible ? 'visible' : ''}`}
          >
            <input
              type="email"
              className="form-input"
              placeholder="Your Email"
              required
            />
          </div>
          
          <div 
            ref={messageRef}
            className={`form-group fade-right ${messageVisible ? 'visible' : ''}`}
          >
            <textarea
              className="form-input"
              placeholder="Your Message"
              rows={6}
              required
            ></textarea>
          </div>
          
          <button 
            ref={buttonRef}
            type="submit" 
            className={`contact-button fade-up ${buttonVisible ? 'visible' : ''}`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;