import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminAuth.css';

export default function AdminAuth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post('/api/v1/admin/auth', {
        email,
        password,
      });
      if (data.token) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin');
      }
    } catch (err) {
      console.log(err.message || 'error in sign in');
    }
  };
  return (
    <div id="small-container">
      <div id="main-container">
        <div id="main-heading">
          <p>Admin Auth</p>
        </div>
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <div>
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    </div>
  );
}
