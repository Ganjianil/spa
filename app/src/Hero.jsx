import React, { useRef, useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current && !videoError) {
      videoRef.current.muted = isMuted;

      const playVideo = async () => {
        try {
          await videoRef.current.play();
          console.log("Video started playing");
          setVideoLoaded(true);
        } catch (error) {
          console.log("Video autoplay failed:", error);
          // Fallback: try to play on user interaction
          const retryPlay = async () => {
            try {
              await videoRef.current.play();
              console.log("Video started playing after user interaction");
              setVideoLoaded(true);
            } catch (retryError) {
              console.log("Retry autoplay failed:", retryError);
              setVideoError(true);
            }
          };

          document.addEventListener("click", retryPlay, { once: true });
          document.addEventListener("touchstart", retryPlay, { once: true });
        }
      };

      // Add a small delay to ensure video is ready
      const timer = setTimeout(() => {
        playVideo();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isMuted, videoError]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = (e) => {
    console.log("Video failed to load:", e);
    setVideoLoaded(false);
    setVideoError(true);
  };

  const handleVideoCanPlay = () => {
    console.log("Video can play");
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoLoadStart = () => {
    console.log("Video load started");
  };

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

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-video-container">
        {/* Fallback background image */}
        <div className="hero-background-image"></div>

        {!videoError && (
          <video
            ref={videoRef}
            className={`hero-video ${videoLoaded ? "loaded" : ""}`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            onLoadedData={handleVideoLoad}
            onCanPlay={handleVideoCanPlay}
            onLoadStart={handleVideoLoadStart}
            onError={handleVideoError}
            onPlay={() => {
              console.log("Video is playing");
              setVideoLoaded(true);
            }}
          >
            {/* Reference video from public folder - use direct path */}
            <source src="/yin.mp4" type="video/mp4" />
            <source
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
              type="video/mp4"
            />
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}

        <div className="hero-video-overlay"></div>

        {!videoError && (
          <button
            className="mute-toggle-button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        )}

        {/* Video loading indicator */}
        {!videoLoaded && !videoError && (
          <div className="video-loading">
            <div className="loading-spinner"></div>
            <p>Loading video...</p>
          </div>
        )}

        {/* Video error fallback */}
        {videoError && (
          <div className="video-error">
            <p>Video unavailable - showing beautiful spa imagery instead</p>
          </div>
        )}

        {/* Debug info - remove this in production */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "10px",
            fontSize: "12px",
            zIndex: 1000,
          }}
        >
          Video Loaded: {videoLoaded ? "Yes" : "No"}
          <br />
          Video Error: {videoError ? "Yes" : "No"}
          <br />
          Video Muted: {isMuted ? "Yes" : "No"}
        </div>
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
            <button
              className="cta-button primary"
              onClick={handleBookNow}
              aria-label="Book a spa session"
            >
              <span className="btn-text">Book Your Session</span>
              <span className="btn-icon">✨</span>
            </button>
            <button
              className="cta-button secondary"
              onClick={scrollToServices}
              aria-label="View spa services"
            >
              <span className="btn-text">View Services</span>
              <span className="btn-icon">👁️</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements for decoration */}
      <div className="floating-elements">
        <div className="floating-element element-1">🌸</div>
        <div className="floating-element element-2">🍃</div>
        <div className="floating-element element-3">✨</div>
        <div className="floating-element element-4">🌿</div>
        <div className="floating-element element-5">💫</div>
      </div>
    </section>
  );
};

export default Hero;
