import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Zen Wellness Spa</h2>
            <p className="lead">
              Your sanctuary for holistic wellness and therapeutic treatments
            </p>
            <p>
              At Zen Wellness Spa, we believe in the power of touch and the
              importance of taking time for yourself. Our expert therapists
              combine traditional techniques with modern wellness practices to
              provide you with an unforgettable spa experience.
            </p>
            <p>
              Since our establishment, we have been dedicated to creating a
              peaceful oasis where you can escape the stresses of daily life.
              Our spa treatments are designed to promote relaxation, reduce
              stress, improve circulation, and enhance your overall well-being.
            </p>
            <div className="about-features">
              <div className="feature">
                <h4>🧘‍♀️ Expert Therapists</h4>
                <p>Certified professionals with years of experience</p>
              </div>
              <div className="feature">
                <h4>🌿 Natural Products</h4>
                <p>Premium organic and natural spa products</p>
              </div>
              <div className="feature">
                <h4>✨ Tranquil Environment</h4>
                <p>Peaceful ambiance for complete relaxation</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="spa-image-container">
              <img
                src="https://plus.unsplash.com/premium_photo-1723867490491-10519f8ed969?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxurious spa interior with candles, towels, and peaceful ambiance"
                className="spa-interior-image"
                loading="lazy"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>Tranquil Spa Environment</h3>
                  <p>Experience serenity in our beautifully designed spaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
