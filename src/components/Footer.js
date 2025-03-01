import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Popular Categories");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(false); // Close dropdown after selecting
  };

  return (
    <footer className="footer">
      <div className="footer-container wrapper">
        <div className="footer-top">
          <div className='card'>
            <ul className="footer-list">
              <li><h4>Need Help</h4></li>
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Returns & Refunds</li>
              <li>FAQ’s</li>
              <li>Career</li>
            </ul>

            <ul className="footer-list">
              <li><h4>Company</h4></li>
              <li>About Us</li>
              <li>Euphoria Blog</li>
              <li>Euphoriastan</li>
              <li>Collaboration</li>
              <li>Media</li>
            </ul>

            <ul className="footer-list">
              <li><h4>More Info</h4></li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Sitemap</li>
            </ul>

            <ul className="footer-list">
              <li><h4>Location</h4></li>
              <li>support@euphoria.in</li>
              <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
              <li>(NH-8 Near Mahadev Hotel) Udaipur, India-313002</li>
            </ul>
          </div>
        </div>   
      </div>

      <div className="footer-bottom wrapper">
        <div className="social-icons">
          <img src="assets/facebook.svg" alt="Facebook" />
          <img src="assets/instagram.svg" alt="Instagram" />
          <img src="assets/twitter.svg" alt="Twitter" />
          <img src="assets/linkedin.svg" alt="LinkedIn" />
        </div>

        <div className="download-app">
          <h4>Download The App</h4>
          <div className='download-app-container'>
            <div className='g-pay'>
              <div className='left'>
                <a href='#'><img src="assets/playstore.svg" alt="Google Play" /></a>
              </div>
              <div className='right'>
                <a href='#'><p>Android App on</p></a>
                <a href='#'><h1>Google Play</h1></a>
              </div>
            </div>

            <div className='app-store'>
              <div className='left'>
                <a href='#'><img src="assets/phone.svg" alt="App Store" /></a>
              </div>
              <div className='right'>
                <a href='#'><p>Available on the</p></a>
                <a href='#'><h1>App Store</h1></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="popular-categories wrapper">
        <h4>{selectedCategory}</h4>
        <img 
          src="assets/arrow-down.svg" 
          className={isOpen ? "rotate" : ""} 
          onClick={() => setIsOpen(!isOpen)}
          alt="Dropdown Arrow"
        />

        {isOpen && (
          <ul className="category-list">
            <li onClick={() => handleCategoryClick("Popular Categories")}>Popular Categories</li>
            <li onClick={() => handleCategoryClick("Men's Clothing")}>Men's Clothing</li>
            <li onClick={() => handleCategoryClick("Women's Clothing")}>Women's Clothing</li>
            <li onClick={() => handleCategoryClick("Accessories")}>Accessories</li>
            <li onClick={() => handleCategoryClick("Footwears")}>Footwears</li>
          </ul>
        )}
      </div>

      <div className="footer-copy">
        <p>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
