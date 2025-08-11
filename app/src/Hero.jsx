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
