import React, { useState } from 'react';
import axios from 'axios';
import './AdminAuth.css';

export default function AdminAuth() {
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
        console.log(data.token);
        localStorage.setItem('adminToken', data.token);
      }
    } catch (err) {
      console.log(err.message || 'error in sign in');
    }
  };
  return (
    <div className="small-container">
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
