import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import SingleProduct from "../datas/Single-product";
import SimilarProducts from "../datas/Similarproducts"; 
import "./Single-page.css";

export const SinglePage = () => {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const product = SingleProduct.find((item) => item.id === productId);

    const images = [
        "/assets/small peach hoodie.png",
        "/assets/small raven hoodie.png",
        "/assets/hatman.png"
    ];
    const [selectedSize, setSelectedSize] = useState(null); // state to track selected size

    const sizes = ["XS", "S", "M", "L", "XL"];

    const [currentImages, setCurrentImages] = useState(images);
    const [mainImage, setMainImage] = useState(
        Array.isArray(product.images) ? product.images[0] : product.images
    );
    const [selectedColor, setSelectedColor] = useState("black");

    const handleImageClick = () => {
        setCurrentImages((prevImages) => {
            const updatedImages = [...prevImages];
            const firstImage = updatedImages.shift();
            updatedImages.push(firstImage);
            return updatedImages;
        });
    };

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    const [activeTab, setActiveTab] = useState('description');

    return (
        <div className="single-product-container">
            <div className="above wrapper">
                <div className="box">
                  
                    {/* Thumbnails */}
                    <div className="product-slider-images">
                        {currentImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className="slider-thumbnail"
                                alt="Thumbnail"
                                onClick={() => handleThumbnailClick(image)}
                            />
                        ))}
                    </div>

                    {/* Center slider image */}
                    <div className="product-slider-container" onClick={handleImageClick}>
                        <img src="/assets/Frame 18.png" className="slider-image" alt="Slider" />
                    </div>

                    {/* Main image changes when thumbnail is clicked */}
                    <div className="product-image">
                        <img src={mainImage} alt={product.name} className="product-main-image" />
                    </div>

                    {/* Product Details */}
                    <div className="product-details">
                        <nav className="breadcrumb">
                            <Link to="/shop">Shop</Link> &gt;
                            <Link to={`/shop/${product.category ? product.category.toLowerCase() : "all"}`}>
                                {product.category || "Men"}
                            </Link>
                            &gt; <span>{product.subCategory || "Top"}</span>
                        </nav>
                        <h1>{product.name}</h1>
                        <div className="rating">
                            <div className="star">
                                <img src="/assets/5star.png"></img>
                                <h1>3.5</h1>
                            </div>
                            <div>
                                <img src="/assets/messegeicon.png"></img>
                                <p>120 comment</p>
                            </div>
                        </div>
                        <div className="size">
                            <div className="top">
                                <h1>Select Size</h1>
                                <h2>Size Guide </h2>
                                <img src="/assets/arrow(3).png"></img>
                            </div>
                            <div className="bottom">
                            <ul>
                                {sizes.map((size) => (
                                    <li
                                    key={size}
                                    className={selectedSize === size ? "selected-size" : ""}
                                    onClick={() => setSelectedSize(size)}
                                    >
                                    {size}
                                    </li>
                                ))}
                            </ul>

                            </div>
                        </div>
                        <div className="colors">
                            <h1>Colours Available </h1>
                            <div className="colourname">
                                <div className={`color-wrapper black ${selectedColor === "black" ? "selected" : ""}`} onClick={() => setSelectedColor("black")}>
                                    <div className="color-inner"></div>
                                </div>
                                <div className={`color-wrapper yellow ${selectedColor === "yellow" ? "selected" : ""}`} onClick={() => setSelectedColor("yellow")}>
                                    <div className="color-inner"></div>
                                </div>
                                <div className={`color-wrapper pink ${selectedColor === "pink" ? "selected" : ""}`} onClick={() => setSelectedColor("pink")}>
                                    <div className="color-inner"></div>
                                </div>
                                <div className={`color-wrapper maroon ${selectedColor === "maroon" ? "selected" : ""}`} onClick={() => setSelectedColor("maroon")}>
                                    <div className="color-inner"></div>
                                </div>
                                </div>

 
                        </div>
                        <div className="cart">
                            <button> <img src="/assets/cart-1.svg" alt="Cart Icon" /> Add to cart</button>
                            <h1>$63.00</h1>
                        </div>
                        <div className="feature-container">
                            <div className="feature-column">
                                <div className="feature-item">
                                    <img src="/assets/Frame 24.png" alt="Secure Payment"/>
                                    <span>Secure payment</span>
                                </div>
                                <div className="feature-item">
                                    <img src="/assets/Frame 25.png" alt="Free Shipping"/>
                                    <span>Free shipping</span>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="feature-column">
                                <div className="feature-item">
                                    <img src="/assets/Frame 26.png" alt="Size & Fit"/>
                                    <span>Size & Fit</span>
                                </div>
                                <div className="feature-item">
                                    <img src="/assets/Frame 27.png" alt="Free Shipping & Returns"/>
                                    <span>Free Shipping & Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            {/* Product Description */}
            <div className="bottom-description wrapper">
                <div className="bottom-left">
                    <div className="top">
                        <img src="/assets/Rectangle 21.png" className="new-arrival" alt="New Arrival" />
                        <h1>Product Description</h1>
                    </div>
                    <div className="bottom">
                        <div className="heading">
                            <h1
                                className={activeTab === 'description' ? 'active' : ''}
                                onClick={() => setActiveTab('description')}
                            >
                                Description
                            </h1>

                            <div
                                className={`middle ${activeTab === 'comments' ? 'active' : ''}`}
                                onClick={() => setActiveTab('comments')}
                            >
                                <h2>User comments</h2>
                                <span>21</span>
                            </div>

                            <div
                                className={`end ${activeTab === 'qa' ? 'active' : ''}`}
                                onClick={() => setActiveTab('qa')}
                            >
                                <h3>Question & Answer</h3>
                                <span>4</span>
                            </div>
                        </div>

                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="bottom-right">
                    <div className="details-table">
                        <div className="detail-item">Fabric <span>Bio-washed Cotton</span></div>
                        <div className="detail-item">Pattern <span>Printed</span></div>
                        <div className="detail-item">Fit <span>Regular-fit</span></div>
                        <div className="detail-item">Neck <span>Round Neck</span></div>
                        <div className="detail-item">Sleeve <span>Half-sleeves</span></div>
                        <div className="detail-item">Style <span>Casual Wear</span></div>
                    </div>
                </div>
            </div>

            {/* Similar Products Section */}
            <div className="similar-products wrapper">
                <div className="top">
                    <img src="/assets/Rectangle 21.png" alt="new arrival" />
                    <h2>Similar Products</h2>
                </div>
                <div className="bottom">
                    <div className="similar-products-container">
                        {SimilarProducts.slice(0, 4).map((item) => (
                            <Link to={`/product/${item.id}`} key={item.id} className="product-card">
                                <img src={item.image} alt={item.name} className="primary-img" />
                                <img src="/assets/heart.png" className="heart" alt="Favorite" />
                                <div className="similar-products-info">
                                    <div className="about">
                                        <h3>{item.name}</h3>
                                        <p>{item.brand}</p>
                                    </div>
                                    <div className="price">
                                        <span className="price">{item.price}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
