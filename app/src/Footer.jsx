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

      <div className="container">
        <div className="footer-content">
          {/* Logo & Description */}
          <div className="footer-brand">
            <h3>🧘‍♀️ Zen Wellness Spa</h3>
            <p>Your sanctuary for ultimate relaxation and rejuvenation</p>
            <button className="cta-book-btn" onClick={handleBookNow}>
              📞 Book Now
            </button>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <div className="links-grid">
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
              <a href="#services" onClick={() => scrollToSection("services")}>
                Services
              </a>
              <a href="#deals" onClick={() => scrollToSection("deals")}>
                Deals
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-items">
              <div className="contact-item">
                <span>📍</span>
                <p>123 Wellness Street, City - 560001</p>
              </div>
              <div className="contact-item">
                <span>📞</span>
                <p>
                  <a href="tel:+916309308175">+91 63093 08175</a>
                </p>
              </div>
              <div className="contact-item">
                <span>⏰</span>
                <p>Mon-Sun: 10AM - 8PM</p>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="footer-social-section">
            <h4>Stay Connected</h4>
            <div className="social-links">
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
                    "Hi! I'm interested in your spa services."
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
            <div className="newsletter-mini">
              <input type="email" placeholder="Your email" />
              <button>✉️</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Zen Wellness Spa. All rights reserved.</p>
            <div className="footer-badges">
              <span className="badge">⭐ 4.9/5 Rating</span>
              <span className="badge">🏆 Best Spa 2023</span>
              <span className="badge">🌿 100% Natural</span>
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
      </div>
    </footer>
  );
};

export default Footer;
