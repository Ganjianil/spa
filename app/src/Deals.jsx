import React from 'react';
import './Deals.css';

const Deals = () => {
  const deals = [
    {
      title: "Couple's Retreat Package",
      originalPrice: "₹9,000",
      discountPrice: "₹7,500", 
      savings: "₹1,500",
      description: "1-hour couple massage + complimentary refreshments",
      validity: "Valid until end of month",
      popular: true
    },
    {
      title: "Wellness Wednesday",
      originalPrice: "₹2,000",
      discountPrice: "₹1,500",
      savings: "₹500",
      description: "25% off on all individual massages every Wednesday",
      validity: "Every Wednesday",
      popular: false
    },
    {
      title: "Beauty & Relaxation Combo",
      originalPrice: "₹6,000",
      discountPrice: "₹4,800",
      savings: "₹1,200",
      description: "Facial + Body Scrub + 45min Massage",
      validity: "Limited time offer",
      popular: false
    },
    {
      title: "First Visit Special",
      originalPrice: "₹2,000",
      discountPrice: "₹1,600",
      savings: "₹400",
      description: "20% off on your first spa session with us",
      validity: "For new clients only",
      popular: true
    }
  ];

  return (
    <section id="deals" className="deals">
      <div className="container">
        <div className="section-header">
          <h2>Special Offers & Deals</h2>
          <p>Take advantage of our exclusive spa packages and seasonal offers</p>
        </div>
        <div className="deals-grid">
          {deals.map((deal, index) => (
            <div key={index} className={`deal-card ${deal.popular ? 'popular' : ''}`}>
              {deal.popular && <div className="popular-badge">Most Popular</div>}
              <div className="deal-header">
                <h3>{deal.title}</h3>
                <div className="pricing">
                  <span className="original-price">{deal.originalPrice}</span>
                  <span className="discount-price">{deal.discountPrice}</span>
                </div>
                <div className="savings">Save {deal.savings}</div>
              </div>
              <div className="deal-content">
                <p className="deal-description">{deal.description}</p>
                <p className="validity">{deal.validity}</p>
                <button className="claim-deal-btn">Claim This Deal</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;