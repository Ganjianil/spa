import React, { useState } from 'react';
import './Images.css';

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Luxury Spa Interior',
      title: 'Luxury Spa Interior',
      category: 'Interior'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Relaxing Massage Therapy',
      title: 'Relaxing Massage Therapy',
      category: 'Services'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Couple Massage Room',
      title: 'Couple Massage Room',
      category: 'Services'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Facial Treatment',
      title: 'Facial Treatment',
      category: 'Services'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Spa Reception Area',
      title: 'Spa Reception Area',
      category: 'Interior'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Aromatherapy Setup',
      title: 'Aromatherapy Setup',
      category: 'Amenities'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Steam Room',
      title: 'Steam Room',
      category: 'Amenities'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Relaxation Lounge',
      title: 'Relaxation Lounge',
      category: 'Amenities'
    }
  ];

  const categories = ['All', 'Interior', 'Services', 'Amenities'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="images-gallery">
      <div className="container">
        <div className="section-header">
          <h2>Spa Gallery</h2>
          <p>Take a virtual tour of our luxurious spa facilities and services</p>
        </div>

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="images-grid">
          {filteredImages.map(image => (
            <div key={image.id} className="image-card" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="image-overlay">
                <h4>{image.title}</h4>
                <p>{image.category}</p>
                <span className="view-icon">👁️</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Images;
