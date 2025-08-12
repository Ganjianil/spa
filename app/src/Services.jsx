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
      name: "Balinese Massage",
      description:
        "Balinese massage integrates traditional techniques such as acupressure, reflexology, and skin rolling to relieve tension, improve blood flow and ease stress.",
      pricing: [
        { duration: "40 Minutes", price: "₹2500/-" },
        { duration: "60 Minutes", price: "₹3000/-" },
        { duration: "90 Minutes", price: "₹4500/-" },
        { duration: "120 Minutes", price: "₹5500/-" },
      ],
      benefits: [
        "Stress relief",
        "Improved blood flow",
        "Muscle tension relief",
        "Traditional healing",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1683120769883-21a953e0aa8d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Balinese massage therapy session",
    },
    {
      name: "Aromatherapy",
      description:
        "Aromatherapy massage combines therapeutic essential oils with gentle massage techniques to enhance relaxation, uplift spirits and promote emotional and physical healing.",
      pricing: [
        { duration: "40 Minutes", price: "₹1500/-" },
        { duration: "60 Minutes", price: "₹2500/-" },
        { duration: "90 Minutes", price: "₹3500/-" },
        { duration: "120 Minutes", price: "₹4500/-" },
      ],
      benefits: [
        "Essential oil therapy",
        "Emotional healing",
        "Relaxation",
        "Stress reduction",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1661400564101-cde308b77610?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Aromatherapy massage with essential oils",
    },
    {
      name: "Deep Tissue Massage",
      description:
        "Deep tissue massage targets the deeper layers of muscle and connective tissue to relieve chronic aches and pain, muscle stiffness, and tension through firm pressure and slow strokes.",
      pricing: [
        { duration: "40 Minutes", price: "₹2500/-" },
        { duration: "60 Minutes", price: "₹3000/-" },
        { duration: "90 Minutes", price: "₹4500/-" },
        { duration: "120 Minutes", price: "₹5500/-" },
      ],
      benefits: [
        "Deep muscle relief",
        "Chronic pain relief",
        "Improved mobility",
        "Tension release",
      ],
      image:
        "https://images.unsplash.com/photo-1704749743751-a512a061ed51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGVlcCUyMFRpc3N1ZSUyME1hc3NhZ2V8ZW58MHx8MHx8fDA%3D",
      alt: "Deep tissue massage therapy",
    },
    {
      name: "Swedish Massage",
      description:
        "Swedish massage employs long, smooth strokes, kneading, and circular movements to improve circulation, reduce muscle tension, and promote relaxation.",
      pricing: [
        { duration: "40 Minutes", price: "₹1500/-" },
        { duration: "60 Minutes", price: "₹2500/-" },
        { duration: "90 Minutes", price: "₹3500/-" },
        { duration: "120 Minutes", price: "₹4500/-" },
      ],
      benefits: [
        "Improved circulation",
        "Muscle relaxation",
        "Stress relief",
        "Better sleep",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1683134386851-daff99d8abef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN3ZWRpc2glMjBNYXNzYWdlfGVufDB8fDB8fHww",
      alt: "Swedish massage therapy session",
    },
    {
      name: "Stone Massage",
      description:
        "Stone massage uses heated and cooled stones to balance energy, provide deep tissue relaxation, and promote deep relaxation and healing.",
      pricing: [{ duration: "120 Minutes", price: "₹5500/-" }],
      benefits: [
        "Deep relaxation",
        "Energy balance",
        "Muscle tension relief",
        "Therapeutic healing",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1661306458301-79601a9d2696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RvbmUlMjBNYXNzYWdlfGVufDB8fDB8fHww",
      alt: "Hot stone massage therapy",
    },
    {
      name: "Thai Therapy",
      description:
        "Thai therapy involves acupressure, stretching, and yoga-like movements to improve flexibility, relieve tension, and enhance overall well-being.",
      pricing: [
        { duration: "40 Minutes", price: "₹1500/-" },
        { duration: "60 Minutes", price: "₹2500/-" },
        { duration: "90 Minutes", price: "₹3500/-" },
        { duration: "120 Minutes", price: "₹4500/-" },
      ],
      benefits: [
        "Improved flexibility",
        "Tension relief",
        "Energy flow",
        "Stress reduction",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1688464908031-32705c960eb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhhaSUyMFRoZXJhcHl8ZW58MHx8MHx8fDA%3D",
      alt: "Thai massage therapy session",
    },
    {
      name: "Tantra Massage",
      description:
        "Tantra massage combines sensual touch and breathing techniques to awaken energy, release emotional blockages, and create a deep sense of relaxation and intimacy.",
      pricing: [
        { duration: "40 Minutes", price: "₹1500/-" },
        { duration: "60 Minutes", price: "₹2500/-" },
        { duration: "90 Minutes", price: "₹3500/-" },
        { duration: "120 Minutes", price: "₹4500/-" },
      ],
      benefits: [
        "Energy awakening",
        "Emotional release",
        "Deep relaxation",
        "Intimacy enhancement",
      ],
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tantra massage therapy",
    },
    {
      name: "Couple's Massage",
      description:
        "Couple massage provides a shared, relaxing experience for partners, offering synchronized massages in a serene setting to enhance connection and relaxation.",
      pricing: [{ duration: "120 Minutes", price: "₹8000/-" }],
      benefits: [
        "Shared experience",
        "Enhanced connection",
        "Synchronized relaxation",
        "Romantic bonding",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1683133390896-6db45575e9a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENvdXBsZSdzJTIwTWFzc2FnZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Couple enjoying massage together",
    },
    {
      name: "Signature Massage",
      description:
        "Signature massage offers a unique blend of techniques tailored to individual needs, providing relaxation, stress relief, and overall well-being.",
      pricing: [{ duration: "120 Minutes", price: "₹5500/-" }],
      benefits: [
        "Customized treatment",
        "Stress relief",
        "Personalized care",
        "Ultimate relaxation",
      ],
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Signature massage therapy",
    },
    {
      name: "Gold Membership",
      description:
        "DEEP TISSUE / BALINESE - Premium membership package offering extended sessions with our most popular massage therapies.",
      pricing: [
        { duration: "05 Hours", price: "₹10,000/-" },
        { duration: "12 Hours", price: "₹20,000/-" },
      ],
      benefits: [
        "Premium package",
        "Extended sessions",
        "Multiple therapies",
        "Best value",
      ],
      image:
        "https://www.istockphoto.com/photo/woman-getting-a-massage-at-tropical-spa-gm117145821-16146474?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fspa&utm_medium=affiliate&utm_source=unsplash&utm_term=spa%3A%3Ano-top-affiliates%3Av1",
      alt: "Gold membership spa package",
    },
    {
      name: "Silver Membership",
      description:
        "AROMATHERAPY / THAI THERAPY / TANTRA MASSAGE / SWEDISH MASSAGE - Comprehensive membership package with variety of therapeutic options.",
      pricing: [
        { duration: "10 Hours", price: "₹10,000/-" },
        { duration: "15 Hours", price: "₹20,000/-" },
      ],
      benefits: [
        "Multiple therapies",
        "Flexible hours",
        "Great value",
        "Variety of treatments",
      ],
      image:
        "https://unsplash.com/photos/attractive-blonde-young-woman-on-couch-with-white-linen-enjoys-hand-facial-massage-in-spa-treat-yourself-VeUsOe3sHeQ",
      alt: "Silver membership spa package",
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
              <div className="service-image">
                <img src={service.image} alt={service.alt} loading="lazy" />
                <div className="service-overlay">
                  <h3>{service.name}</h3>
                </div>
              </div>
              <div className="service-content">
                <p className="service-description">{service.description}</p>
                <div className="service-pricing">
                  {service.pricing.map((option, idx) => (
                    <div key={idx} className="price-option">
                      <span className="duration">{option.duration}</span>
                      <span className="price">{option.price}</span>
                    </div>
                  ))}
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
