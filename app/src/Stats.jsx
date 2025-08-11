import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    appointments: 0,
    rating: 0,
    experience: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const finalValues = {
    clients: 2500,
    appointments: 5000,
    rating: 4.9,
    experience: 8
  };

  const animateCounter = (key, finalValue, duration = 2000) => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      let currentValue;
      if (key === 'rating') {
        currentValue = (startValue + (finalValue - startValue) * progress).toFixed(1);
      } else {
        currentValue = Math.floor(startValue + (finalValue - startValue) * progress);
      }
      
      setCounters(prev => ({
        ...prev,
        [key]: currentValue
      }));
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Start animations with different delays
            setTimeout(() => animateCounter('clients', finalValues.clients), 100);
            setTimeout(() => animateCounter('appointments', finalValues.appointments), 300);
            setTimeout(() => animateCounter('rating', finalValues.rating), 500);
            setTimeout(() => animateCounter('experience', finalValues.experience), 700);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const stats = [
    {
      key: 'clients',
      value: counters.clients,
      suffix: '+',
      label: 'Happy Clients',
      icon: '😊',
      color: '#e74c3c'
    },
    {
      key: 'appointments',
      value: counters.appointments,
      suffix: '+',
      label: 'Appointments Completed',
      icon: '📅',
      color: '#27ae60'
    },
    {
      key: 'rating',
      value: counters.rating,
      suffix: '/5',
      label: 'Customer Rating',
      icon: '⭐',
      color: '#f39c12'
    },
    {
      key: 'experience',
      value: counters.experience,
      suffix: '+',
      label: 'Years Experience',
      icon: '🏆',
      color: '#8e44ad'
    }
  ];

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="container">
        <div className="section-header">
          <h2>Our Achievements</h2>
          <p>Numbers that speak for our excellence and customer satisfaction</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.key} className="stat-card" style={{'--accent-color': stat.color}}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                {stat.value}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="testimonial-preview">
          <h3>What Our Clients Say</h3>
          <div className="testimonials-slider">
            <div className="testimonial active">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Amazing experience! The massage was incredibly relaxing and the staff was very professional."</p>
              <span>- Priya S.</span>
            </div>
            <div className="testimonial">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Best couple massage experience ever! The ambiance was perfect and very romantic."</p>
              <span>- Raj & Meera</span>
            </div>
            <div className="testimonial">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"The facial treatment was outstanding. My skin feels so refreshed and glowing!"</p>
              <span>- Anita K.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
