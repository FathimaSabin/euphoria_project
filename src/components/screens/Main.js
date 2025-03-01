import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import CategoriesData from "../datas/CategoriesData";
import CategoriesWomenData from "../datas/CategoriesWomenData";
import CategoriesLimelight  from "../datas/CategoriesLimelight";
import FeedbackData from "../datas/FeedbackData";




export const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClickLeft = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  const handleClickRight = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  return (
    <>
      {/* Spotlight Section */}
      <div className="spotlight">
        <div className="container">
          <div className="left">
            <h1>T-Shirt / Tops</h1>
            <h2>Summer <br /> Value Pack</h2>
            <p>cool / colorful / comfy</p>
            <button className="btn">Shop Now</button>
            <img src="assets/carousel-indicators.png" alt="carousel" />
          </div>
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

      {/* New Arrival Section */}
      <div className="new-arrival wrapper">
      <div className="top">
        <img src="assets/Rectangle 21.png" alt="new arrival" />
        <h1>New Arrival</h1>
      </div>

      <button className="slide-btn left-btn" onClick={handleClickLeft}>
        <img src="assets/arrow-left.svg" alt="left arrow" />
      </button>

      <div className="bottom">
        <div className="container">
          <ul
            className="image-list"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <li>
              <img src="assets/img-1.png" alt="knitted joggers" />
              <p>Knitted Joggers</p>
            </li>
            <li>
              <img src="assets/img-3.jpg" alt="full sleeve" />
              <p>Full Sleeve</p>
            </li>
            <li>
              <img src="assets/img-4.jpg" alt="active t-shirts" />
              <p>Active T-Shirts</p>
            </li>
            <li>
              <img src="assets/img-2.jpg" alt="urban shirts" />
              <p>Urban Shirts</p>
            </li>
            <li>
              <img src="assets/img-5.jpg" alt="summer collection" />
              <p>Summer Collection</p>
            </li>
            <li>
              <img src="assets/img-6.jpg" alt="denim jackets" />
              <p>Denim Jackets</p>
            </li>
            <li>
              <img src="assets/img-7.jpg" alt="casual wear" />
              <p>Casual Wear</p>
            </li>
            <li>
              <img src="assets/img-8.jpg" alt="formal suits" />
              <p>Formal Suits</p>
            </li>
          </ul>
        </div>
      </div>

      <button className="slide-btn right-btn" onClick={handleClickRight}>
          <img src="assets/arrow-right.svg" alt="rightarrow" />
        </button>
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
            {CategoriesData.map((category) => (
              <div key={category.id} className="category-card">
                <img src={category.image} alt={category.name} className="primary-img" />
                <div className="category-info">
                  <div className="info">
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                  </div>
                  <div className="rightshop-btn">
                    <img src="assets/arrow-right.svg" alt="RightArrow" />
                  </div>
                </div>
              </div> 
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
        
          {console.log("CategoriesLimelight Data:", CategoriesLimelight)}
          
          <div className="limelight-container">
            {Array.isArray(CategoriesLimelight) && CategoriesLimelight.length > 0 ? (
              CategoriesLimelight.map((product) => (
                <div key={product.id} className="limelight-card">
                  <img src={product.image} alt={product.name} className="primary-img" />
                  <img src="assets/heart.png" className="heart"></img>
                  <div className="limelight-info">
                    <div className="about">
                      <h3>{product.name}</h3>
                      <p>{product.brand}</p>
                    </div>
                    <div className="price">
                      <span className="price">{product.price}</span>
                    </div>
                  </div>
                </div>
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

                {/* For line breaks  */}
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
