import React from 'react';
import './Navbar.css';




const Navbar = () => {
  return (
    <div className="navbar wrapper">
      <div className="nav-logo">
        <img src="assets/Logo.svg" alt="logo" />
      </div>

      <div className="nav-middle">
        <ul className="shop">
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
          <img src="assets/cart.svg" alt="cart"></img>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
