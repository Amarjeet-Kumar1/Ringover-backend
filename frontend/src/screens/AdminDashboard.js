import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [adminToken, setAdminToken] = useState();
  const [message, setMessage] = useState('no message');
  const [id, setId] = useState();

  useEffect(() => {
    if (localStorage.getItem('adminToken')) {
      setAdminToken(localStorage.getItem('adminToken'));
    } else {
      navigate('/admin/auth');
    }
  }, [setAdminToken, navigate]);
  const createHandler = async (e) => {
    try {
      e.preventDefault();
      var formData = new FormData(e);
      console.log(formData);
      const { data } = await axios.post(
        '/api/v1/admin/product/create',
        {
          formData,
        },
        {
          headers: {
            authorization: `Bearer ${adminToken}`,
          },
        }
      );
      setMessage(data.message);
    } catch (err) {
      setMessage(err.message);
    }
  };

  const deleteHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.get(
        `/api/v1/admin/product/delete/?id=${id}`,
        {
          headers: {
            authorization: `Bearer ${adminToken}`,
          },
        }
      );
      setMessage(data.message);
    } catch (err) {
      setMessage(err.message);
    }
  };
  return (
    <div id="small-container">
      <div id="create-product">
        <p>Create Product</p>
        <form onSubmit={createHandler}>
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
        <div id="delete-form">
          <form onSubmit={deleteHandler}>
            <div>
              <input
                type="number"
                name="id"
                id="id"
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter product id"
              />
            </div>
            <div>
              <input type="submit" value="Delete Product" />
            </div>
          </form>
        </div>
      </div>
      <div id="message">
        <p id="server-message">{message}</p>
      </div>
    </div>
  );
}
