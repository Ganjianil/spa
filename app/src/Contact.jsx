import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setEnquiryForm({
      ...enquiryForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !enquiryForm.name ||
      !enquiryForm.email ||
      !enquiryForm.subject ||
      !enquiryForm.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create WhatsApp message with all enquiry data
    const whatsappMessage = `
🧘‍♀️ *SPA ENQUIRY FROM WEBSITE*

👤 *Contact Details:*
• Name: ${enquiryForm.name}
• Email: ${enquiryForm.email}
• Phone: ${enquiryForm.phone || "Not provided"}

📋 *Enquiry Details:*
• Subject: ${enquiryForm.subject}

💬 *Message:*
${enquiryForm.message}

Please respond to my enquiry at your earliest convenience. Thank you! 🙏
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp with the message
    const whatsappURL = `https://wa.me/916309308175?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    // Show success message
    alert(
      "Redirecting to WhatsApp with your enquiry details! Please send the message and we will get back to you within 24 hours."
    );

    // Optional: Reset form after submission
    setEnquiryForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us & Enquiry</h2>
          <p>
            Get in touch with us for any questions or to learn more about our
            services
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Visit Our Spa</h3>
            <div className="contact-item">
              <h4>📍 Address</h4>
              <p>
                123 Wellness Street
                <br />
                Spa District, City - 560001
                <br />
                Karnataka, India
              </p>
            </div>

            <div className="contact-item">
              <h4>📞 Phone</h4>
              <p>
                <a href="tel:+916309308175">+91 63093 08175</a>
                <br />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </p>
            </div>

            <div className="contact-item">
              <h4>✉️ Email</h4>
              <p>
                <a href="mailto:info@zenwellnessspa.com">
                  info@zenwellnessspa.com
                </a>
                <br />
                <a href="mailto:bookings@zenwellnessspa.com">
                  bookings@zenwellnessspa.com
                </a>
              </p>
            </div>

            <div className="contact-item">
              <h4>⏰ Operating Hours</h4>
              <p>
                Monday - Sunday: 10:00 AM - 8:00 PM
                <br />
                Last appointment: 7:00 PM
              </p>
            </div>

            <div className="social-media">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">
                  📘 Facebook
                </a>
                <a href="#" className="social-link">
                  📷 Instagram
                </a>
                <a href="#" className="social-link">
                  🐦 Twitter
                </a>
                <a
                  href="#"
                  className="social-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const message = encodeURIComponent(
                      "Hi! I'm interested in your spa services and would like to know more."
                    );
                    window.open(
                      `https://wa.me/916309308175?text=${message}`,
                      "_blank"
                    );
                  }}
                >
                  💬 WhatsApp
                </a>
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
                  placeholder="Enter your full name"
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
                    placeholder="Enter your email address"
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
                    placeholder="Enter your phone number (optional)"
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
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Service Information">
                    Service Information
                  </option>
                  <option value="Pricing Details">Pricing Details</option>
                  <option value="Booking Assistance">Booking Assistance</option>
                  <option value="Special Packages">Special Packages</option>
                  <option value="Group Bookings">Group Bookings</option>
                  <option value="Gift Vouchers">Gift Vouchers</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Partnership Opportunities">
                    Partnership Opportunities
                  </option>
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
                  placeholder="Please describe your enquiry in detail. Include any specific questions about our services, pricing, or availability..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                📱 Send via WhatsApp
              </button>

              <p className="form-note">
                * Required fields. Your enquiry will be sent via WhatsApp for
                quick response.
              </p>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h3>Find Us on Map</h3>
          <div className="map-placeholder">
            <p>🗺️ Interactive Map Location</p>
            <p>123 Wellness Street, Spa District, City - 560001</p>
            <p>Click here to open in Google Maps</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
