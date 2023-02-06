import React, { useContext } from 'react';
import { Store } from '../../Store';
import './CartItem.css';

export default function CartItem(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const removeItem = async () => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: product });
  };
  return (
    <div className="product-cart" key={product.id}>
      <div className="product-cart-image">
        <img src={product.imgUrl} alt={product.name} />
        <span className="cross" onClick={removeItem}>
          <i className="fa fa-times-circle-o"></i>
        </span>
      </div>
      <div className="product-cart-details">
        <div className="product-cart-heading">
          <p className="product-cart-name">{product.name}</p>
          <p className="product-cart-small">by KICKSUP and you</p>
        </div>
        <div className="product-cart-price">
          <p>Rs. {product.price}/-</p>
        </div>
      </div>
    </div>
  );
}
