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

    // Reset form after submission
    setEnquiryForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const openGoogleMaps = () => {
    const address =
      "Plot No 14, Vijayapuri Colony, Above Union Bank Of India, Netaji Nagar X Road, Hyderabad, Kapra-500062, Telangana, India";
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2>Contact Us & Enquiry</h2>
          <p>
            Get in touch with us for any questions or to learn more about our
            services
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Information Cards */}
          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">📍</div>
              <div className="card-content">
                <h4>Visit Our Spa</h4>
                <p>
                  Plot No 14, Vijayapuri Colony
                  <br />
                  Above Union Bank Of India
                  <br />
                  Netaji Nagar X Road
                  <br />
                  Hyderabad, Kapra-500062
                  <br />
                  Telangana, India
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">📞</div>
              <div className="card-content">
                <h4>Call Us</h4>
                <p>
                  <a href="tel:+916309308175">+91 63093 08175</a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">✉️</div>
              <div className="card-content">
                <h4>Email Us</h4>
                <p>
                  <a href="mailto:zenwellnesssaloonandspa@gmail.com">
                    zenwellnesssaloonandspa@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">⏰</div>
              <div className="card-content">
                <h4>Operating Hours</h4>
                <p>
                  Monday - Sunday
                  <br />
                  10:00 AM - 8:00 PM
                  <br />
                  Last appointment: 7:00 PM
                </p>
              </div>
            </div>

            <div className="contact-card social-card">
              <div className="card-icon">🌐</div>
              <div className="card-content">
                <h4>Follow Us</h4>
                <div className="social-buttons">
                  <a href="#" className="social-btn facebook">
                    📘
                  </a>
                  <a href="#" className="social-btn instagram">
                    📷
                  </a>
                  <a href="#" className="social-btn twitter">
                    🐦
                  </a>
                  <a
                    href="#"
                    className="social-btn whatsapp"
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
                    💬
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="enquiry-section">
            <div className="form-header">
              <h3>Send Us an Enquiry</h3>
              <p>Fill out the form below and we'll get back to you soon</p>
            </div>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="enquiry-name"
                    name="name"
                    value={enquiryForm.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="enquiry-name">Your Name *</label>
                  <div className="input-border"></div>
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="enquiry-email"
                      name="email"
                      value={enquiryForm.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="enquiry-email">Email Address *</label>
                    <div className="input-border"></div>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      id="enquiry-phone"
                      name="phone"
                      value={enquiryForm.phone}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label htmlFor="enquiry-phone">Phone Number</label>
                    <div className="input-border"></div>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <div className="select-wrapper">
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
                    <option value="Booking Assistance">
                      Booking Assistance
                    </option>
                    <option value="Special Packages">Special Packages</option>
                    <option value="Group Bookings">Group Bookings</option>
                    <option value="Gift Vouchers">Gift Vouchers</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership Opportunities">
                      Partnership Opportunities
                    </option>
                  </select>
                  <label htmlFor="enquiry-subject">Subject *</label>
                </div>
              </div>

              <div className="input-group">
                <div className="textarea-wrapper">
                  <textarea
                    id="enquiry-message"
                    name="message"
                    value={enquiryForm.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="enquiry-message">Your Message *</label>
                  <div className="input-border"></div>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                <span className="btn-icon">📱</span>
                <span className="btn-text">Send via WhatsApp</span>
                <div className="btn-ripple"></div>
              </button>

              <p className="form-note">
                * Required fields. Your enquiry will be sent via WhatsApp for
                quick response.
              </p>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-header">
            <h3>Find Us on Map</h3>
            <p>Visit our spa for the ultimate relaxation experience</p>
          </div>

          <div className="map-container">
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8234567890123!2d78.55435!3d17.485475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzA3LjciTiA3OMKwMzMnMTUuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zen Wellness Spa Location"
              ></iframe>
            </div>

            <div className="map-actions">
              <button className="map-btn primary" onClick={openGoogleMaps}>
                <span>🗺️</span>
                Open in Google Maps
              </button>
              <button
                className="map-btn secondary"
                onClick={() => {
                  const destination =
                    "Plot No 14, Vijayapuri Colony, Netaji Nagar X Road, Kapra-500062, Hyderabad";
                  window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      destination
                    )}`,
                    "_blank"
                  );
                }}
              >
                <span>🧭</span>
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
