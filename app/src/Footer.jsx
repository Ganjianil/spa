import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleBookNow = () => {
    // Create custom modal for 3 options
    const modal = document.createElement("div");
    modal.className = "booking-modal-overlay";
    modal.innerHTML = `
      <div class="booking-modal">
        <div class="booking-modal-header">
          <h3>📞 Choose Your Booking Method</h3>
          <p>How would you like to book your spa appointment?</p>
        </div>
        <div class="booking-options">
          <button class="booking-option call-option" data-action="call">
            <span class="option-icon">📞</span>
            <div class="option-content">
              <h4>Call Now</h4>
              <p>Speak directly with our team</p>
            </div>
          </button>
          <button class="booking-option whatsapp-option" data-action="whatsapp">
            <span class="option-icon">💬</span>
            <div class="option-content">
              <h4>WhatsApp</h4>
              <p>Chat with us on WhatsApp</p>
            </div>
          </button>
          <button class="booking-option cancel-option" data-action="cancel">
            <span class="option-icon">❌</span>
            <div class="option-content">
              <h4>Cancel</h4>
              <p>Go back to browsing</p>
            </div>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    // Add click handlers
    modal.addEventListener("click", (e) => {
      const action = e.target.closest("[data-action]")?.dataset.action;
      if (action === "call") {
        window.location.href = "tel:+916309308175";
        document.body.removeChild(modal);
        document.body.style.overflow = "unset";
      } else if (action === "whatsapp") {
        const message = encodeURIComponent(
          "Hi! I would like to book a spa appointment. Please help me with the available slots."
        );
        window.open(`https://wa.me/916309308175?text=${message}`, "_blank");
        document.body.removeChild(modal);
        document.body.style.overflow = "unset";
      } else if (action === "cancel" || e.target === modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = "unset";
      }
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    if (email) {
      alert("Thank you for subscribing to our newsletter!");
      e.target.querySelector('input[type="email"]').value = "";
    }
  };

  return (
    <footer className="footer">
      {/* Wave Decoration */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          {/* Logo & Description */}
          <div className="footer-brand">
            <div className="brand-logo">
              <img
                src="/logo.jpeg"
                alt="Zen Wellness Spa Logo"
                className="footer-logo"
                onError={(e) => {
                  console.log("Logo failed to load");
                  e.target.style.display = "none";
                }}
                onLoad={() => {
                  console.log("Logo loaded successfully");
                }}
              />
              <h3>Zen Wellness Spa</h3>
            </div>
            <p>
              Your sanctuary for ultimate relaxation and rejuvenation.
              Experience the perfect blend of traditional wellness practices and
              modern spa luxury.
            </p>
            <button className="cta-book-btn" onClick={handleBookNow}>
              <span className="btn-icon">✨</span>
              <span>Book Your Session</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home" onClick={() => scrollToSection("home")}>
                <span className="link-icon">🏠</span>
                Home
              </a>
              <a href="#about" onClick={() => scrollToSection("about")}>
                <span className="link-icon">ℹ️</span>
                About Us
              </a>
              <a href="#services" onClick={() => scrollToSection("services")}>
                <span className="link-icon">💆‍♀️</span>
                Services
              </a>
              <a href="#amenities" onClick={() => scrollToSection("amenities")}>
                <span className="link-icon">🌿</span>
                Amenities
              </a>
              <a href="#deals" onClick={() => scrollToSection("deals")}>
                <span className="link-icon">🎯</span>
                Deals
              </a>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                <span className="link-icon">📞</span>
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Information</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-details">
                  <h5>Visit Us</h5>
                  <p>
                    Plot No 14, Vijayapuri Colony
                    <br />
                    Above Union Bank Of India
                    <br />
                    Netaji Nagar X Road, Kapra-500062
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-details">
                  <h5>Call Us</h5>
                  <p>
                    <a href="tel:+916309308175">+91 63093 08175</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⏰</span>
                <div className="contact-details">
                  <h5>Working Hours</h5>
                  <p>
                    Monday - Sunday
                    <br />
                    10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="footer-section">
            <h4>Stay Connected</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/zenwellnesssaloonandspa"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn facebook"
                aria-label="Follow us on Facebook"
              >
                <div className="social-icon facebook-icon">
                  <span>f</span>
                </div>
                <span className="social-text">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/zenwellness.saloonandspa/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram"
                aria-label="Follow us on Instagram"
              >
                <div className="social-icon instagram-icon">
                  <span>📷</span>
                </div>
                <span className="social-text">Instagram</span>
              </a>
              <a
                href="#"
                className="social-btn whatsapp"
                onClick={(e) => {
                  e.preventDefault();
                  const message = encodeURIComponent(
                    "Hi! I'm interested in your spa services."
                  );
                  window.open(
                    `https://wa.me/916309308175?text=${message}`,
                    "_blank"
                  );
                }}
                aria-label="Chat with us on WhatsApp"
              >
                <div className="social-icon whatsapp-icon">
                  <span>💬</span>
                </div>
                <span className="social-text">WhatsApp</span>
              </a>
            </div>

            <div className="newsletter">
              <h5>Newsletter</h5>
              <p>Subscribe for exclusive offers and wellness tips</p>
              <form
                className="newsletter-form"
                onSubmit={handleNewsletterSubmit}
              >
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit" aria-label="Subscribe to newsletter">
                    <span>Subscribe</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Zen Wellness Spa. All rights reserved.</p>
              <div className="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
            <div className="footer-badges">
              <div className="badge">
                <span className="badge-icon">⭐</span>
                <span>4.9/5 Rating</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🏆</span>
                <span>Best Spa 2024</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🌿</span>
                <span>100% Natural</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </footer>
  );
};

export default Footer;
