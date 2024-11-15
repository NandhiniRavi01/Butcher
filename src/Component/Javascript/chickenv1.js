import React, { useState, useEffect } from 'react';
import { FaTruck, FaClock, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/chickenv1.css';

const ProductDescription = () => {
  const images = [
    '/Image/chickenv1.png',
    '/Image/chickenv2.png',
    '/Image/chickenv3.png',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const totalImages = images.length;

  const navigate = useNavigate();  // Initialize navigate

  const [isFavorite, setIsFavorite] = useState(false); // Add state for favorite
  const toggleFavorite = () => setIsFavorite(!isFavorite); // Function to toggle favorite status

  // Automatic slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalImages]);

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % totalImages);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + totalImages) % totalImages);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      handleNextImage();
    } else if (touchStartX - touchEndX < -50) {
      handlePrevImage();
    }
    setTouchStartX(null);
  };

  const [quantity, setQuantity] = useState(4);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="product-page">
      <section className="slideshow">
        <article className="slideImage">
          <div className="image-container">
          <button className="back-button">
             <a href='/home'>{'<'}</a>
          </button>

            <div className="text-overlay">About This Menu</div>
            <button className="favorite-button" onClick={toggleFavorite}>
              {isFavorite ? '❤️' : '♡'}
            </button>
            <img
              src={images[currentImageIndex]}
              alt="Product"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              className="slideshow-image"
            />
          </div>
        </article>
      </section>

      {/* Product Details */}
      <h1>Fresh Chicken</h1>
      <div className="price">
        <span className="current-price">Rs 210</span>
        <span className="original-price">Rs 280</span>/ kg
      </div>
      <div className="details">
        <div className="delivery">
          <FaTruck /> Free Delivery
        </div>
        <div className="time">
          <FaClock /> 20 - 30 mins
        </div>
        <div className="rating">
          <FaStar /> 4.5
        </div>
      </div>
      <h2>Description</h2>
      <p>
        Teach employees how to break down a whole chicken into parts: breasts, wings, thighs, and drumsticks.
      </p>

      {/* Recommended Section */}
      <div className="seeall">
        <h2>Recommended For You</h2>
        <p className="view">
          <a href="/home">See All</a>
        </p>
      </div>
      <div className="recommended-section">
        <div className="recommended-item">
          <img src="/Image/chicken-curry.png" />
         
        </div>
        <div className="recommended-item">
          <img src="/Image/chicken-legs.png" />
          
        </div>
        
        <div className="recommended-item1">
          <img src="/Image/mutton.png" />
          
        </div>
        <div className="recommended-item1">
          <img src="/Image/curry-cut.png" />
          
        </div>
      </div>

      {/* Quantity Control */}
      <div className="fixed-cart">
        <div className='add-button'><button onClick={decreaseQuantity}>-</button></div>
        <h1>{quantity}</h1>
        <div className='add-button'><button onClick={increaseQuantity}>+</button></div>

        {/* Add to Cart Button */}
        <button className="add-to-cart">
          <i className="fas fa-shopping-cart"></i><p style={{ fontSize: '20px' }}>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
