import React from 'react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <div id="small-container">
      <div id="create-product">
        <p>Create Product</p>
        <form>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="product name"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="product price"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="rating"
              id="rating"
              placeholder="initial rating"
              required
              min={0}
              max={5}
            />
          </div>
          <div>
            <input
              type="number"
              name="numReviews"
              id="numReviews"
              required
              placeholder="initial number of review"
            />
          </div>
          <div>
            <input
              type="text"
              name="type"
              id="type"
              placeholder="shoe type"
              required
            />
          </div>
          <div>
            <label htmlFor="imgUrl-select">img url</label>
            <select name="imgUrl" id="imgUrl-select" required>
              <option value="/images/products/shoe1.jpg">shoe1.jpg</option>
              <option value="/images/products/shoe3.png">shoe3.png</option>
              <option value="/images/products/shoe2.jpg">shoe2.jpg</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
      <div id="delete-product">
        <div></div>
      </div>
      <div id="message"></div>
    </div>
  );
}
