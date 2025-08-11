import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setEnquiryForm({
      ...enquiryForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will get back to you within 24 hours.');
    console.log('Enquiry data:', enquiryForm);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us & Enquiry</h2>
          <p>Get in touch with us for any questions or to learn more about our services</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Visit Our Spa</h3>
            <div className="contact-item">
              <h4>📍 Address</h4>
              <p>123 Wellness Street<br />
                 Spa District, City - 560001<br />
                 Karnataka, India</p>
            </div>
            
            <div className="contact-item">
              <h4>📞 Phone</h4>
              <p>+91 98765 43210<br />
                 +91 87654 32109</p>
            </div>
            
            <div className="contact-item">
              <h4>✉️ Email</h4>
              <p>info@zenwellnessspa.com<br />
                 bookings@zenwellnessspa.com</p>
            </div>
            
            <div className="contact-item">
              <h4>⏰ Operating Hours</h4>
              <p>Monday - Sunday: 10:00 AM - 8:00 PM<br />
                 Last appointment: 7:00 PM</p>
            </div>

            <div className="social-media">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">📘 Facebook</a>
                <a href="#" className="social-link">📷 Instagram</a>
                <a href="#" className="social-link">🐦 Twitter</a>
                <a href="#" className="social-link">💼 LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="enquiry-form-container">
            <h3>Send Us an Enquiry</h3>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="enquiry-name">Your Name *</label>
                <input
                  type="text"
                  id="enquiry-name"
                  name="name"
                  value={enquiryForm.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="enquiry-email">Email Address *</label>
                  <input
                    type="email"
                    id="enquiry-email"
                    name="email"
                    value={enquiryForm.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enquiry-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="enquiry-phone"
                    name="phone"
                    value={enquiryForm.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-subject">Subject *</label>
                <select
                  id="enquiry-subject"
                  name="subject"
                  value={enquiryForm.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Enquiry</option>
                  <option value="services">About Services</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="booking">Booking Assistance</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership Opportunities</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-message">Your Message *</label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  value={enquiryForm.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Please describe your enquiry in detail..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h3>Find Us on Map</h3>
          <div className="map-placeholder">
            <p>🗺️ Interactive Map Location</p>
            <p>123 Wellness Street, Spa District, City - 560001</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;