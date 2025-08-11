import React, { useState } from 'react';
import './BookNow.css';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    duration: '',
    message: ''
  });

  const services = [
    'Spa Normal Massage',
    'Couple Massage', 
    'Body Scrub',
    'Face Detox Pack',
    'Facial Treatment'
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', 
    '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Booking request submitted! We will contact you shortly to confirm your appointment.');
    console.log('Booking data:', formData);
  };

  return (
    <section id="book" className="book-now">
      <div className="container">
        <div className="section-header">
          <h2>Book Your Spa Session</h2>
          <p>Schedule your relaxation and wellness experience with us</p>
        </div>
        <div className="booking-content">
          <div className="booking-form-container">
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Select Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="duration">Duration</label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                >
                  <option value="">Select duration</option>
                  <option value="45min">45 minutes</option>
                  <option value="60min">1 hour</option>
                  <option value="75min">75 minutes</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Special Requests or Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any special requests or health conditions we should know about?"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Book Appointment
              </button>
            </form>
          </div>
          
          <div className="booking-info">
            <h3>Booking Information</h3>
            <div className="info-item">
              <h4>📞 Call Us</h4>
              <p>+91 98765 43210</p>
            </div>
            <div className="info-item">
              <h4>⏰ Operating Hours</h4>
              <p>Monday - Sunday: 10:00 AM - 8:00 PM</p>
            </div>
            <div className="info-item">
              <h4>📋 Booking Policy</h4>
              <p>• 24-hour advance booking required</p>
              <p>• Cancellation allowed up to 4 hours before</p>
              <p>• 50% advance payment for couple sessions</p>
            </div>
            <div className="info-item">
              <h4>💳 Payment Options</h4>
              <p>Cash, Card, UPI, Net Banking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;