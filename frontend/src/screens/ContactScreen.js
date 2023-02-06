import React from 'react';
import './ContactScreen.css';
export default function ContactScreen() {
  return (
    <div id="contact">
      <div id="contact-card">
        <div id="card-heading">
          <p>REACH US AT</p>
        </div>
        <div id="card-list-container">
          <div className="card-list">
            <p className="contact-email">support@kicksup.com</p>
            <p className="contact-desc">for any technical support</p>
          </div>
          <div className="card-list">
            <p className="contact-email">info@kicksup.com</p>
            <p className="contact-desc">for more information</p>
          </div>
          <div className="card-list">
            <p className="contact-email">feedback@kicksup.com</p>
            <p className="contact-desc">to send your feedback</p>
          </div>
          <div className="card-list">
            <p className="contact-email">jobs@kicksup.com</p>
            <p className="contact-desc">to work with us</p>
          </div>
        </div>
      </div>
      <div id="contact-socials">
        <p>stay in touch</p>
        <div id="contact-socials-icon">
          <div className="social-icon">
            <img src="/images/socials/twitter.png" alt="twitter" />
          </div>
          <div className="social-icon">
            <img src="/images/socials/insta.png" alt="instagram" />
          </div>
          <div className="social-icon">
            <img src="/images/socials/facebook.png" alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}
