import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Popular Categories");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(false); 
  };

  return (
    <footer className="footer">
      <div className="footer-container wrapper">
        <div className="footer-top">
          <div className='card'>
            <ul className="footer-list">
              <li><h4>Need Help</h4></li>
              <a href='#'><li>Contact Us</li></a>
              <a href='#'><li>Track Order</li></a>
              <a href='#'><li>Returns & Refunds</li></a>
              <a href='#'><li>FAQ’s</li></a>
              <a href='#'><li>Career</li></a>
            </ul>

            <ul className="footer-list">
              <li><h4>Company</h4></li>
              <a href='#'><li>About Us</li></a>
              <a href='#'><li>Euphoria Blog</li></a>
              <a href='#'><li>Euphoriastan</li></a>
              <a href='#'><li>Collaboration</li></a>
              <a href='#'><li>Media</li></a>
            </ul>

            <ul className="footer-list">
              <li><h4>More Info</h4></li>
              <a href='#'><li>Terms and Conditions</li></a>
              <a href='#'><li>Privacy Policy</li></a>
              <a href='#'><li>Shipping Policy</li></a>
              <a href='#'><li>Sitemap</li></a>
            </ul>

            <ul className="footer-list">
              <li><h4>Location</h4></li>
              <a href='#'><li>support@euphoria.in</li></a>
              <a href='#'><li>Eklingpura Chouraha, Ahmedabad Main Road</li></a>
              <a href='#'><li>(NH-8 Near Mahadev Hotel) Udaipur, India-313002</li></a>
            </ul>
          </div>
        </div>   
      </div>

      <div className="footer-bottom-container wrapper">
        <div className="social-icons">
          <a href='#'><img src="assets/facebook.svg" alt="Facebook" /></a>
          <a href='#'><img src="assets/instagram.svg" alt="Instagram" /></a>
          <a href='#'><img src="assets/twitter.svg" alt="Twitter" /></a>
          <a href='#'><img src="assets/linkedin.svg" alt="LinkedIn" /></a>
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
        <a href='#'><p>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p></a>
      </div>
    </footer>
  );
};

export default Footer;
