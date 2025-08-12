import React, { useState, useEffect } from "react";
import "./Images.css";

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Luxury Spa Interior",
      title: "Luxury Spa Interior",
      category: "Interior",
      description:
        "Experience tranquility in our beautifully designed spa interior",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Relaxing Massage Therapy",
      title: "Relaxing Massage Therapy",
      category: "Services",
      description: "Professional massage therapy for ultimate relaxation",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Couple Massage Room",
      title: "Couple Massage Room",
      category: "Services",
      description: "Romantic couple massage experience in private suite",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Facial Treatment",
      title: "Facial Treatment",
      category: "Services",
      description: "Rejuvenating facial treatments for glowing skin",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Spa Reception Area",
      title: "Spa Reception Area",
      category: "Interior",
      description: "Welcoming reception area with modern amenities",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Aromatherapy Setup",
      title: "Aromatherapy Setup",
      category: "Amenities",
      description: "Essential oils and aromatherapy for enhanced relaxation",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Steam Room",
      title: "Steam Room",
      category: "Amenities",
      description: "Detoxifying steam room for complete wellness",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Relaxation Lounge",
      title: "Relaxation Lounge",
      category: "Amenities",
      description:
        "Comfortable lounge area for pre and post treatment relaxation",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Professional Facial",
      title: "Professional Facial",
      category: "Services",
      description: "Expert facial treatments using premium products",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Spa Products",
      title: "Premium Spa Products",
      category: "Amenities",
      description: "High-quality organic and natural spa products",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Meditation Space",
      title: "Meditation Space",
      category: "Interior",
      description: "Peaceful meditation area for mindfulness practices",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Hot Stone Therapy",
      title: "Hot Stone Therapy",
      category: "Services",
      description: "Therapeutic hot stone massage for deep muscle relaxation",
    },
  ];

  const categories = ["All", "Interior", "Services", "Amenities"];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsLoading(false);
    }, 300);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="images-gallery">
      <div className="container">
        <div className="section-header">
          <h2>Spa Gallery</h2>
          <p>
            Take a virtual tour of our luxurious spa facilities and services
          </p>
          <div className="gallery-stats">
            <div className="stat-item">
              <span className="stat-number">{images.length}</span>
              <span className="stat-label">Photos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{categories.length - 1}</span>
              <span className="stat-label">Categories</span>
            </div>
          </div>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              <span className="filter-icon">
                {category === "All" && "🏛️"}
                {category === "Interior" && "🏠"}
                {category === "Services" && "💆‍♀️"}
                {category === "Amenities" && "✨"}
              </span>
              {category}
              <span className="filter-count">
                (
                {category === "All"
                  ? images.length
                  : images.filter((img) => img.category === category).length}
                )
              </span>
            </button>
          ))}
        </div>

        <div className={`images-grid ${isLoading ? "loading" : ""}`}>
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="image-card"
              onClick={() => openModal(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="image-wrapper">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>{image.title}</h4>
                    <p className="category-tag">{image.category}</p>
                    <p className="image-description">{image.description}</p>
                    <div className="view-btn">
                      <span className="view-icon">👁️</span>
                      <span>View Full Size</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="no-images">
            <div className="no-images-icon">📷</div>
            <h3>No images found</h3>
            <p>Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-backdrop"></div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              <span>&times;</span>
            </button>

            <div className="modal-image-container">
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>

            <div className="modal-info">
              <div className="modal-header">
                <h3>{selectedImage.title}</h3>
                <span className="modal-category">{selectedImage.category}</span>
              </div>
              <p className="modal-description">{selectedImage.description}</p>

              <div className="modal-actions">
                <button className="modal-btn share-btn">📤 Share</button>
                <button className="modal-btn download-btn">💾 Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Images;
