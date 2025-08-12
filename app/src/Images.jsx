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
      alt: "Relaxing Spa Massage",
      title: "Relaxing Spa Massage",
      category: "Massage",
      description: "Professional massage therapy for ultimate relaxation and stress relief",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Aromatherapy Treatment",
      title: "Aromatherapy Treatment",
      category: "Massage",
      description: "Essential oil therapy combined with therapeutic massage techniques",
    },
    {
      id: 3,
      src: "/interior.jpeg",
      alt: "Spa Interior View 1",
      title: "Spa Interior View 1",
      category: "Interior",
      description: "Beautiful spa interior showcasing our luxurious treatment rooms",
    },
    {
      id: 4,
      src: "/interior2.jpeg",
      alt: "Spa Interior View 2",
      title: "Spa Interior View 2",
      category: "Interior",
      description: "Elegant spa design with calming ambiance and modern amenities",
    },
    {
      id: 5,
      src: "/interior3.jpeg",
      alt: "Spa Interior View 3",
      title: "Spa Interior View 3",
      category: "Interior",
      description: "Tranquil spa environment designed for complete relaxation",
    },
    {
      id: 6,
      src: "/interior4.jpeg",
      alt: "Spa Interior View 4",
      title: "Spa Interior View 4",
      category: "Interior",
      description: "Premium spa facilities with attention to every detail",
    },
    {
      id: 7,
      src: "/interior5.jpeg",
      alt: "Spa Interior View 5",
      title: "Spa Interior View 5",
      category: "Interior",
      description: "Sophisticated spa interiors creating a peaceful atmosphere",
    },
    {
      id: 8,
      src: "/interior6.jpeg",
      alt: "Spa Interior View 6",
      title: "Spa Interior View 6",
      category: "Interior",
      description: "Luxurious spa spaces designed for your comfort and wellness",
    },
 
    
    // Video content
    {
      id: 16,
      src: "/what.mp4",
      alt: "Spa Relaxation Video",
      title: "Spa Relaxation Experience",
      category: "Videos",
      description: "Immersive spa experience video showcasing our tranquil environment",
      isVideo: true,
    },
  ];

  const categories = ["All", "Massage", "Facial", "Body Care", "Interior", "Videos"];

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

  const handleBookNow = () => {
    const modal = document.createElement("div");
    modal.className = "booking-modal-overlay";
    modal.innerHTML = `
      <div class="booking-modal">
        <div class="booking-modal-header">
          <h3>📞 Book Your Spa Session</h3>
          <p>How would you like to book your spa appointment?</p>
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

    modal.addEventListener("click", (e) => {
      const action = e.target.closest("[data-action]")?.dataset.action;
      if (action === "call") {
        window.location.href = "tel:+916309308175";
        document.body.removeChild(modal);
        document.body.style.overflow = "unset";
      } else if (action === "whatsapp") {
        const message = encodeURIComponent(
          "Hi! I would like to book a spa appointment. Please help me with the available slots."
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

  return (
    <section id="gallery" className="images-gallery">
      <div className="container">
        <div className="section-header">
          <h2>Spa Gallery</h2>
          <p>Explore our spa treatments, services, and wellness experiences</p>
          <div className="gallery-stats">
            <div className="stat-item">
              <span className="stat-number">{images.length}</span>
              <span className="stat-label">Media</span>
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
                {category === "All" && "🎯"}
                {category === "Massage" && "💆‍♀️"}
                {category === "Facial" && "✨"}
                {category === "Body Care" && "🌿"}
                {category === "Interior" && "🏠"}
                {category === "Videos" && "🎥"}
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
              className={`image-card ${image.isVideo ? "video-card" : ""}`}
              onClick={() => openModal(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="image-wrapper">
                {image.isVideo ? (
                  <video
                    src={image.src}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  />
                ) : (
                  <img src={image.src} alt={image.alt} loading="lazy" />
                )}
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>{image.title}</h4>
                    <p className="category-tag">{image.category}</p>
                    <p className="image-description">{image.description}</p>
                    <div className="view-btn">
                      <span className="view-icon">
                        {image.isVideo ? "🎥" : "👁️"}
                      </span>
                      <span>
                        {image.isVideo ? "Play Video" : "View Full Size"}
                      </span>
                    </div>
                  </div>
                </div>
                {image.isVideo && (
                  <div className="video-indicator">
                    <span className="play-icon">▶️</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="no-images">
            <div className="no-images-icon">📷</div>
            <h3>No media found</h3>
            <p>Try selecting a different category</p>
          </div>
        )}

        <div className="gallery-cta">
          <h3>Ready to Experience These Treatments?</h3>
          <p>
            Book your appointment today and indulge in our premium spa services
          </p>
          <button className="gallery-book-btn" onClick={handleBookNow}>
            <span className="btn-icon">✨</span>
            <span>Book Your Session Now</span>
          </button>
        </div>
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
              {selectedImage.isVideo ? (
                <video
                  src={selectedImage.src}
                  controls
                  autoPlay
                  loop
                  muted
                  className="modal-video"
                />
              ) : (
                <img src={selectedImage.src} alt={selectedImage.alt} />
              )}
            </div>
            <div className="modal-info">
              <div className="modal-header">
                <h3>{selectedImage.title}</h3>
                <span className="modal-category">{selectedImage.category}</span>
              </div>
              <p className="modal-description">{selectedImage.description}</p>
              <div className="modal-actions">
                <button className="modal-btn book-btn" onClick={handleBookNow}>
                  📞 Book This Treatment
                </button>
                <button className="modal-btn share-btn">📤 Share</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Images;
