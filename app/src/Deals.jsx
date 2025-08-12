import React from "react";
import "./Deals.css";

const Deals = () => {
  const handleClaimDeal = (dealTitle, dealPrice, dealDescription) => {
    // Create custom modal for 3 options
    const modal = document.createElement("div");
    modal.className = "booking-modal-overlay";
    modal.innerHTML = `
      <div class="booking-modal">
        <div class="booking-modal-header">
          <h3>🎁 Claim ${dealTitle}</h3>
          <p>How would you like to claim this special offer?</p>
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
          `Hi! I would like to claim the "${dealTitle}" offer (${dealPrice}). ${dealDescription}. Please help me book this deal.`
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

  const deals = [
    {
      title: "Couple's Retreat Package",
      originalPrice: "₹9,000",
      discountPrice: "₹7,500",
      savings: "₹1,500",
      description: "1-hour couple massage + complimentary refreshments",
      validity: "Valid until end of month",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Wellness Wednesday",
      originalPrice: "₹2,000",
      discountPrice: "₹1,500",
      savings: "₹500",
      description: "25% off on all individual massages every Wednesday",
      validity: "Every Wednesday",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Beauty & Relaxation Combo",
      originalPrice: "₹6,000",
      discountPrice: "₹4,800",
      savings: "₹1,200",
      description: "Facial + Body Scrub + 45min Massage",
      validity: "Limited time offer",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "First Visit Special",
      originalPrice: "₹2,000",
      discountPrice: "₹1,600",
      savings: "₹400",
      description: "20% off on your first spa session with us",
      validity: "For new clients only",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="deals" className="deals">
      <div className="container">
        <div className="section-header">
          <h2>Special Offers & Deals</h2>
          <p>
            Take advantage of our exclusive spa packages and seasonal offers
          </p>
        </div>
        <div className="deals-grid">
          {deals.map((deal, index) => (
            <div
              key={index}
              className={`deal-card ${deal.popular ? "popular" : ""}`}
            >
              {deal.popular && (
                <div className="popular-badge">🔥 Most Popular</div>
              )}

              <div className="deal-image">
                <img src={deal.image} alt={deal.title} loading="lazy" />
                <div className="deal-overlay">
                  <div className="savings-badge">Save {deal.savings}</div>
                </div>
              </div>

              <div className="deal-header">
                <h3>{deal.title}</h3>
                <div className="pricing">
                  <span className="original-price">{deal.originalPrice}</span>
                  <span className="discount-price">{deal.discountPrice}</span>
                </div>
              </div>

              <div className="deal-content">
                <p className="deal-description">{deal.description}</p>
                <p className="validity">⏰ {deal.validity}</p>
                <button
                  className="claim-deal-btn"
                  onClick={() =>
                    handleClaimDeal(
                      deal.title,
                      deal.discountPrice,
                      deal.description
                    )
                  }
                >
                  🎁 Claim This Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
