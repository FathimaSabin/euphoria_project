import React, { useState, useEffect } from "react";
import "./Main.css";
import { Link, useNavigate } from "react-router-dom";

import CategoriesData from "../datas/CategoriesData.js";
import NewArrivalsData from "../datas/New-arrivalsData.js";
import CategoriesWomenData from "../datas/CategoriesWomenData.js";
import CategoriesLimelight from "../datas/CategoriesLimelight.js";
import FeedbackData from "../datas/FeedbackData.js";
import SingleProduct from "../datas/Single-product.js";
import { BiCategory } from "react-icons/bi";

const leftArrow = process.env.PUBLIC_URL + "/assets/arrow-left.svg";
const rightArrow = process.env.PUBLIC_URL + "/assets/arrow-right.svg";

export const Main = () => {
  console.log("NewArrivalsData:", NewArrivalsData);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalVisible, setTotalVisible] = useState(4);
  const navigate = useNavigate();


  const arrivalsDataArray = Array.isArray(NewArrivalsData) ? NewArrivalsData : [];

  const maxSlides = Math.max(Math.ceil(arrivalsDataArray.length / totalVisible) - 1, 0);


  const updateVisibleItems = () => {
    let newTotal = 4;
    if (window.innerWidth <= 320) newTotal = 1;
    else if (window.innerWidth <= 480) newTotal = 2;
    else if (window.innerWidth <= 640) newTotal = 2;
    else if (window.innerWidth <= 768) newTotal = 3;
    else if (window.innerWidth <= 980) newTotal = 4;
    else newTotal = 4;

    setTotalVisible(newTotal);
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);



  const handleClickLeft = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - totalVisible : NewArrivalsData.length - totalVisible));
  };
  
  const handleClickRight = () => {
    setCurrentSlide((prevSlide) => (prevSlide + totalVisible >= NewArrivalsData.length ? 0 : prevSlide + totalVisible));
  };
  
  
  return (
    <>
      {/* Spotlight Section */}
      <div className="spotlight">
        <div className="container">
          <a href="#"><img src="assets/left-arrow-bold.svg" className="left-arrow" alt="left arrow" /></a>
          <div className="left">
            <h1>T-Shirt / Tops</h1>
            <h2>Summer <br /> Value Pack</h2>
            <p>cool / colorful / comfy</p>
            <button className="btn">Shop Now</button>
            <img src="assets/carousel-indicators.png" alt="carousel" />
          </div>
          <div className="right">
            <img src="assets/bg-1.jpg" alt="Spotlight" />
          </div>
          <a href="#"><img src="assets/right-arrow-bold.svg" className="right-arrow" alt="right arrow" /></a>
        </div>
      </div>

      {/* Explore Section */}
      <div className="explore wrapper">
        <div className="container">
          <ul>
            <li>
              <h1>Low Price</h1>
              <h2>High Coziness</h2>
              <p>UPTO 50% OFF</p>
              <Link to="/explore">Explore Items</Link>
            </li>
            <li className="Beyoung">
              <h1>Beyoung Presents</h1>
              <h2>Breezy Summer <br /> Style</h2>
              <p>UPTO 50% OFF</p>
              <Link to="/explore">Explore Items</Link>
            </li>
          </ul>
        </div>
      </div>



      {/* New- Arrival Section */}
      <div className="new-arrivals wrapper">
      <div className="top">
        <img src="/assets/Rectangle 21.png" alt="new arrival" />
        <h1>New Arrival</h1>
      </div>

      <div className="slider-container">
        {/* Left Slide Button */}
        <button className="slide-btn" onClick={handleClickLeft} disabled={currentSlide === 0}>
          <img src={leftArrow} alt="Left Arrow" />
        </button>

        
        <div className="slider" >
          {NewArrivalsData.map((item, index) => (
            <div
              key={item.id}
              className={`slide-item ${index >= currentSlide && index < currentSlide + totalVisible ? "visible" : "hidden"}`}
              style={{
                display: index >= currentSlide && index < currentSlide + totalVisible ? "block" : "none",
              }}
            >
              <img src={item.image} alt={item.name} className="primary-img" />
              <div className="category-info">
                <div className="info">
                  <h2>{item.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Slide Button */}
        <button className="slide-btn" onClick={handleClickRight} disabled={currentSlide + totalVisible >= NewArrivalsData.length}>
          <img src={rightArrow} alt="Right Arrow" />
        </button>
      </div>

    </div>



      {/* Shop Now Section */}
      <div className="shop-now wrapper">
        <div className="container">
          <div className="left">
            <h2>WE MADE YOUR EVERYDAY <br /> FASHION BETTER!</h2>
            <p>
              In our journey to improve everyday fashion, <br />
              euphoria presents EVERYDAY wear range - <br />
              Comfortable & Affordable fashion 24/7
            </p>
            <button className="shop-btn">Shop Now</button>
          </div>
          <div className="right">
            <img src="assets/friends.png" alt="friends" />
          </div>
        </div>
      </div>


      {/* Categories for Men Section */}
      <div className="Categories-men wrapper">
        <div className="top">
          <img src="assets/Rectangle 21.png" alt="new arrival" />
          <h1>Categories For Men</h1>
        </div>
        <div className="bottom">
          <div className="container">
            {CategoriesData.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="category-card">
                <img src={item.image} alt={item.name} className="primary-img" />
                <div className="category-info">
                  <div className="info">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className="rightshop-btn">
                    <img src="assets/arrow-right.svg" alt="RightArrow" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
            
      {/* Categories for Women Section */}
      <div className="Categories-women wrapper">
        <div className="top">
          <img src="assets/Rectangle 21.png" alt="new arrival" />
          <h1>Categories For Women</h1>
        </div>
        <div className="bottom">
          <div className="container">
            {CategoriesWomenData.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="category-card">
                <img src={item.image} alt={item.name} className="primary-img" />
                <div className="category-info">
                  <div className="info">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className="rightshop-btn">
                    <img src="assets/arrow-right.svg" alt="RightArrow" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      


      {/* Top-Brands Section */}
      <div className="top-brands wrapper">
        <div className="container">
          <img src="assets/Top Brands Deal.png" alt="top-brands" />
        </div>
      </div>

      {/* Limelight Section */}
      <div className="limelight wrapper">
        <div className="top">
          <img src="assets/Rectangle 21.png" alt="new arrival" />
          <h2>In The Limelight</h2>
        </div>
        <div className="bottom">
          <div className="limelight-container">
            {Array.isArray(CategoriesLimelight) && CategoriesLimelight.length > 0 ? (
              CategoriesLimelight.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className="product-card">
                  <img src={item.image} alt={item.name} className="primary-img" />
                  <img src="assets/heart.png" className="heart" alt="Favorite" />
                  <div className="limelight-info">
                    <div className="about">
                      <h3>{item.name}</h3>
                      <p>{item.brand}</p>
                    </div>
                    <div className="price">
                      <span className="price">{item.price}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </div>



      {/* Feedback Section */}
      <div className="feedback wrapper">
        <div className="top">
          <img src="assets/Rectangle 21.png" alt="new arrival" /> 
          <h2>Feedback</h2>
        </div>

        <div className="bottom">
        
          <div className="feedback-container">
            {FeedbackData.map((feedback) => (
              <div key={feedback.id} className="feedback-card">
                <img src={feedback.image} alt={feedback.name} className="primary-img" />
                <h3>{feedback.name}</h3>

                
                {Array.isArray(feedback.comment) ? (
                  feedback.comment.map((line, index) => (
                        <p key={index}>{line}</p>
                  ))
                ) : (
                  <p>{feedback.comment}</p>
                )}

                <img src={feedback.ratingImage} alt="rating" className="rating-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
