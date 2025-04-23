import React, { useState, useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Shop");
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const searchRef = useRef(null);

  const menuItems = ["Shop", "Men", "Women", "Combos", "Joggers"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect outside click to close search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

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
          {menuItems.map((item) => (
            <li
              key={item}
              className={activeItem === item ? 'active' : ''}
              onClick={() => {
                setActiveItem(item);
                setMenuOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-right">
        <div className="container">
          <div
            className={`searchbar ${showSearch ? 'active' : ''}`}
            ref={searchRef}
            onClick={() => {
              if (isMobile) setShowSearch(!showSearch);
            }}
          >
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
