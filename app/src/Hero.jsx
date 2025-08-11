import React, { useRef, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on load
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

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

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Video */}
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        >
          {/* Multiple video sources for better compatibility */}
          <source
            src="https://player.vimeo.com/external/434045526.hd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=174"
            type="video/mp4"
          />
          <source
            src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Video overlay for better text readability */}
        <div className="hero-video-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to Zen Wellness Spa</h1>
          <p>Experience Ultimate Relaxation & Rejuvenation</p>
          <p className="hero-subtitle">
            Indulge in our premium spa treatments, therapeutic massages, and
            wellness services designed to restore your mind, body, and soul in a
            tranquil environment.
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary" onClick={handleBookNow}>
              Book Your Session
            </button>
            <button className="cta-button secondary" onClick={scrollToServices}>
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
