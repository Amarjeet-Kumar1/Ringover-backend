import React, { useContext } from 'react';
import { Store } from '../../Store';
import CartItem from './CartItem';
import './CartSide.css';

export default function CartSide() {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <div id="cart-side">
      <div id="cart-side-container">
        <div id="cart-heading-container">
          <div id="cart-heading">
            <p>CART</p>
          </div>
          <div id="cart-icons">
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
        <div id="cart-main">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((one) => <CartItem product={one} key={one.id} />)
          ) : (
            <p id="empty-cart">What's stopping you, designer? </p>
          )}
        </div>
        <div id="cart-bottom-icon">
          <div
            id="home-location"
            className={cartItems.length === 0 ? 'disabled' : 'clickable'}
          >
            <i className="fa-solid fa-location-dot"></i>
            <p>Home</p>
          </div>
          <div
            id="select-date"
            className={cartItems.length === 0 ? 'disabled' : 'clickable'}
          >
            <i className="fa-regular fa-calendar"></i>
            <p>Select Date</p>
          </div>
        </div>
        <div id="cart-order">
          <button className={cartItems.length === 0 ? 'disabled' : 'clickable'}>
            order now
          </button>
        </div>
      </div>
    </div>
  );
}
