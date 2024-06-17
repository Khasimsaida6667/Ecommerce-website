import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiAmericanexpress, SiPaypal } from 'react-icons/si';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="section">
          <h3>Contact Us</h3>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Street, City, Country</p>
        </section>

        <section className="section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </section>

        <section className="section">
          <h3>Payment Modes</h3>
          <div className="payment-modes">
            <SiVisa />
            <SiMastercard />
            <SiAmericanexpress />
            <SiPaypal />
          </div>
        </section>

        <section className="section">
          <h3>Subscribe</h3>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
