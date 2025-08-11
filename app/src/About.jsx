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
            <div className="image-placeholder">
              <p>Spa Interior Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
