import React from "react";
import "./Services.css";

const Services = () => {
  const handleBookService = (serviceName) => {
    // Create custom modal for 3 options
    const modal = document.createElement("div");
    modal.className = "booking-modal-overlay";
    modal.innerHTML = `
      <div class="booking-modal">
        <div class="booking-modal-header">
          <h3>📞 Book ${serviceName}</h3>
          <p>How would you like to book this service?</p>
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
          `Hi! I would like to book ${serviceName}. Please help me with the available slots and pricing.`
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

  const services = [
    {
      name: "Spa Normal Massage",
      duration45: "45 minutes",
      price45: "₹1,500",
      duration60: "1 hour",
      price60: "₹2,000",
      description: "Relaxing full-body massage to relieve stress and tension",
      benefits: ["Stress relief", "Muscle relaxation", "Improved circulation"],
    },
    {
      name: "Couple Massage",
      duration45: "45 minutes",
      price45: "₹3,500",
      duration60: "1 hour",
      price60: "₹4,500",
      description: "Romantic spa experience for couples in our private suite",
      benefits: ["Bonding experience", "Shared relaxation", "Private suite"],
    },
    {
      name: "Body Scrub",
      duration: "60 minutes",
      price: "₹1,500",
      description:
        "Exfoliating treatment to remove dead skin and reveal smooth, glowing skin",
      benefits: ["Skin exfoliation", "Improved texture", "Deep cleansing"],
    },
    {
      name: "Face Detox Pack",
      duration: "75 minutes",
      price: "₹4,000",
      description:
        "Deep cleansing facial treatment to detoxify and rejuvenate your skin",
      benefits: ["Deep cleansing", "Pore purification", "Skin detoxification"],
    },
    {
      name: "Facial Treatment",
      duration: "60 minutes",
      price: "₹2,000",
      description: "Customized facial treatment for all skin types",
      benefits: ["Skin hydration", "Anti-aging", "Glowing complexion"],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Premium Spa Services</h2>
          <p>
            Indulge in our range of therapeutic treatments and wellness services
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <h3>{service.name}</h3>
              </div>
              <div className="service-content">
                <p className="service-description">{service.description}</p>
                <div className="service-pricing">
                  {service.duration45 ? (
                    <>
                      <div className="price-option">
                        <span className="duration">{service.duration45}</span>
                        <span className="price">{service.price45}</span>
                      </div>
                      <div className="price-option">
                        <span className="duration">{service.duration60}</span>
                        <span className="price">{service.price60}</span>
                      </div>
                    </>
                  ) : (
                    <div className="price-option">
                      <span className="duration">{service.duration}</span>
                      <span className="price">{service.price}</span>
                    </div>
                  )}
                </div>
                <div className="service-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className="book-service-btn"
                  onClick={() => handleBookService(service.name)}
                >
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
