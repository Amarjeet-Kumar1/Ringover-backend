import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div className="product-container">
      <div className="product-image">
        <Link to={`/store?id=${product.id}`}>
          <img src={product.imgUrl} alt={product.name} />
        </Link>
      </div>
      <div className="product-name">
        <p>{product.name}</p>
      </div>
      <div className="product-price-rating">
        <div className="product-price">
          <p>Rs. {product.price}/-</p>
        </div>

        <Rating rating={product.rating} />
      </div>
    </div>
  );
}
