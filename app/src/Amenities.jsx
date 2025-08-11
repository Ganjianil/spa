import React from 'react';
import './Amenities.css';

const Amenities = () => {
  const amenities = [
    {
      icon: "🛁",
      title: "Steam Room", 
      description: "Detoxify and relax in our premium steam room facility"
    },
    {
      icon: "🧘‍♀️",
      title: "Meditation Room",
      description: "Quiet space for meditation and mindfulness practices"
    },
    {
      icon: "🌿",
      title: "Aromatherapy",
      description: "Essential oils and natural fragrances for enhanced relaxation"
    },
    {
      icon: "🎵",
      title: "Relaxation Lounge",
      description: "Comfortable seating area with soothing music and refreshments"
    },
    {
      icon: "🚿",
      title: "Private Showers",
      description: "Clean, private shower facilities with premium amenities"
    },
    {
      icon: "🧴",
      title: "Premium Products",
      description: "High-quality organic and natural spa products"
    },
    {
      icon: "❄️",
      title: "Climate Control",
      description: "Perfect temperature control for your comfort"
    },
    {
      icon: "🔒",
      title: "Secure Lockers",
      description: "Safe storage for your personal belongings"
    }
  ];

  return (
    <section id="amenities" className="amenities">
      <div className="container">
        <div className="section-header">
          <h2>Spa Amenities & Facilities</h2>
          <p>Enjoy our world-class facilities designed for your comfort and relaxation</p>
        </div>
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-icon">{amenity.icon}</div>
              <h3>{amenity.title}</h3>
              <p>{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;