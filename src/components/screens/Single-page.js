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

    const [currentImages, setCurrentImages] = useState(images);

    const handleImageClick = () => {
        setCurrentImages((prevImages) => {
            const updatedImages = [...prevImages];
            const firstImage = updatedImages.shift();
            updatedImages.push(firstImage);
            return updatedImages;
        });
    };

    return (
        <div className="single-product-container">
            <div className="above wrapper">
                <div className="box">
                  
                    <div className="product-slider-images">
                        {currentImages.map((image, index) => (
                            <img key={index} src={image} className="slider-thumbnail" alt="Thumbnail"/>
                        ))}
                    </div>

                   
                    <div className="product-slider-container" onClick={handleImageClick}>
                        <img src="/assets/Frame 18.png" className="slider-image" alt="Slider" />
                    </div>

                    <div className="product-image">
                        <img src={Array.isArray(product.images) ? product.images[0] : product.images} alt={product.name} className="product-main-image" />
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
                        <img src="/assets/Frame 15.png" className="star" alt="Rating" />
                        <img src="/assets/Frame 22.png" className="size" alt="Size" />
                        <img src="/assets/Frame 23.png" className="colour" alt="Color" />
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
                        <img src="/assets/Frame 37.png" className="frame-37" alt="Description Icon" />
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

