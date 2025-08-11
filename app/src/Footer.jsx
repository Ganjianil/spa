import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Zen Wellness Spa</h3>
            <p>Your sanctuary for holistic wellness and therapeutic treatments. Experience ultimate relaxation and rejuvenation.</p>
            <div className="footer-social">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#deals">Special Deals</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Therapeutic Massage</a></li>
              <li><a href="#services">Couple Massage</a></li>
              <li><a href="#services">Body Scrub</a></li>
              <li><a href="#services">Facial Treatments</a></li>
              <li><a href="#services">Detox Packages</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 123 Wellness Street, City - 560001</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@zenwellnessspa.com</p>
              <p>⏰ Mon-Sun: 10:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Zen Wellness Spa. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;