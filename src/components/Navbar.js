import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar wrapper">
      
      <div className="nav-logo">
        <img src="assets/Logo.svg" alt="logo" />
      </div>

    
      <div className="nav-middle">
        <i 
          className="fa-solid fa-bars menu-icon" 
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
        <ul className={`shop ${menuOpen ? 'open' : ''}`}>
          <li><b>Shop</b></li>
          <li>Men</li>
          <li>Women</li>
          <li>Combos</li>
          <li>Joggers</li>
        </ul>
      </div>

     
      <div className="nav-right">
        <div className="container">
          <div className="searchbar">
            <img src="assets/search.svg" alt="search" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>

      <div className="nav-end">
        <div className="cart">
          <img src="assets/wishlist.svg" alt="wishlist" />
          <img src="assets/account.svg" alt="accounts" />
          <img src="assets/cart.svg" alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
