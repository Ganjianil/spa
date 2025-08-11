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
                Plot No 14, Vijayapuri Colony, Above Union Bank Of India, Netaji
                Nagar X Road <br />
                Hyderabad, Kapra-500062 <br />
                Telangana, India
              </p>
            </div>

            <div className="contact-item">
              <h4>📞 Phone</h4>
              <p>
                <a href="tel:+916309308175">+91 63093 08175</a>
              </p>
            </div>

            <div className="contact-item">
              <h4>✉️ Email</h4>
              <p>
                <a href="mailto:zenwellnesssaloonandspa@gmail.com">
                  zenwellnesssaloonandspa@gmail.com
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
                <a href="#" className="social-link facebook">
                  📘 Facebook
                </a>
                <a href="#" className="social-link instagram">
                  📷 Instagram
                </a>
                <a href="#" className="social-link twitter">
                  🐦 Twitter
                </a>
                <a
                  href="#"
                  className="social-link whatsapp"
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
          <div className="map-container">
            <div className="map-info">
              <p>🗺️ Our Location</p>
              <p className="address-text">
                Plot No 14, Vijayapuri Colony, Above Union Bank Of India, Netaji
                Nagar X Road, Kapra-500062, Hyderabad, Telangana
              </p>
            </div>

            {/* Working Google Maps Embed */}
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8234567890123!2d78.55435!3d17.485475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzA3LjciTiA3OMKwMzMnMTUuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "15px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zen Wellness Spa Location"
              ></iframe>
            </div>

            <div className="map-actions">
              <button className="map-btn" onClick={openGoogleMaps}>
                🗺️ Open in Google Maps
              </button>
              <button
                className="map-btn directions-btn"
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
                🧭 Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
