import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    // Show options for call or WhatsApp
    const userChoice = window.confirm(
      "Choose your preferred contact method:\n\nOK - Call Now\nCancel - WhatsApp"
    );

    if (userChoice) {
      // Call option
      window.location.href = "tel:+916309308175";
    } else {
      // WhatsApp option
      const message = encodeURIComponent(
        "Hi! I would like to book a spa appointment. Please help me with the available slots."
      );
      window.open(`https://wa.me/916309308175?text=${message}`, "_blank");
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>Zen Wellness Spa</h2>
        </div>
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About Us
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => scrollToSection("services")}>
                Services
              </a>
            </li>
            <li>
              <a href="#amenities" onClick={() => scrollToSection("amenities")}>
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
              <button onClick={handleBookNow} className="book-btn">
                Book Now
              </button>
            </li>
          </ul>
        </nav>
        <div
          className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
