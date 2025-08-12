import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "/logo.jpeg"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".header")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleBookNow = () => {
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

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* Hamburger Menu - Left Side */}
          <button
            className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Logo - Center */}
          <div className="logo">
            <img
              src={logo}
              alt="Zen Wellness Spa Logo"
              className="logo-image"
            />
            <span className="logo-text">Zen Wellness Spa</span>
          </div>

          {/* Desktop Navigation - Right */}
          <nav className="desktop-nav">
            <ul>
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => scrollToSection("services")}>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  onClick={() => scrollToSection("amenities")}
                >
                  Amenities
                </a>
              </li>
              <li>
                <a href="#deals" onClick={() => scrollToSection("deals")}>
                  Deals
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  Contact
                </a>
              </li>
              <li>
                <button onClick={handleBookNow} className="desktop-book-btn">
                  Book Now
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Book Button - Right Side */}
          <button onClick={handleBookNow} className="mobile-book-btn-header">
            Book
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-background"></div>
        <nav className="mobile-nav">
          <div className="mobile-menu-header">
            <img
              src={logo}
              alt="Zen Wellness Spa Logo"
              className="mobile-logo"
            />
            <h3>Zen Wellness Spa</h3>
          </div>
          <ul className="mobile-menu-list">
            <li>
              <a href="#home" onClick={() => scrollToSection("home")}>
                <span className="menu-icon">🏠</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                <span className="menu-icon">ℹ️</span>
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => scrollToSection("services")}>
                <span className="menu-icon">💆‍♀️</span>
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#amenities" onClick={() => scrollToSection("amenities")}>
                <span className="menu-icon">🌿</span>
                <span>Amenities</span>
              </a>
            </li>


            <li>
              <button onClick={handleBookNow} className="mobile-book-btn">
                <span className="menu-icon">✨</span>
                <span>Book Appointment</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
