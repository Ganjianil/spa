import React from "react";
import "./MapEmbed.css";

const MapEmbed = () => {
  return (
    <section className="map-section">
      <h2 className="map-title">📍 Visit Us</h2>
      <p className="map-description">
        We're located in a serene spot perfect for your spa retreat.
      </p>
      <div className="map-container">
        <iframe
          title="Zen Wellness Spa Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.054460902349!2d78.5516723!3d17.485443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e1e2f2f2f3%3A0x123456789abcdef!2s17%C2%B029'07.6%22N+78%C2%B033'15.3%22E!5e0!3m2!1sen!2sin!4v1691834567890!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapEmbed;
