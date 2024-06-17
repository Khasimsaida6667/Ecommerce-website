import React, { useState } from 'react';
import { FaHeart as HeartOutlineIcon, FaHeart as HeartFilledIcon } from 'react-icons/fa';
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeartIcon = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={product.image} alt={product.title} />

      </div>
      <div className="product-card-info">
        <h2>{product.title}</h2>
        <p>{product.description.slice(0, 100)}...</p>
        <p>Price: ${product.price}</p>
        <button className="view-details-btn">View Details</button>
        <div className="heart-icon1" onClick={toggleHeartIcon}>
          {isHeartFilled ? <HeartFilledIcon color="red" /> : <HeartOutlineIcon color='#ccc' />}
        </div>
      </div>

    </div>
  );
};

export default ProductCard;