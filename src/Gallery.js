import { useState } from 'react';

const productData = {
    products: [
        { id: 1, name: "products1", image: "./images/image-product-1.jpg", thumbnail: "./images/image-product-1-thumbnail.jpg" },
        { id: 2, name: "products2", image: "./images/image-product-2.jpg", thumbnail: "./images/image-product-2-thumbnail.jpg" },
        { id: 3, name: "products3", image: "./images/image-product-3.jpg", thumbnail: "./images/image-product-3-thumbnail.jpg" },
        { id: 4, name: "products4", image: "./images/image-product-4.jpg", thumbnail: "./images/image-product-4-thumbnail.jpg" }
    ]
};

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Track index instead of image URL
    const [closeGallery, setCloseGallery] = useState(true);

    // Current product based on index
    const currentProduct = productData.products[currentIndex];

    // Handle next/previous navigation
    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === productData.products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? productData.products.length - 1 : prevIndex - 1
        );
    };

    // Thumbnail click handler
    const handleThumbnailClick = (id) => {
        const newIndex = productData.products.findIndex(product => product.id === id);
        setCurrentIndex(newIndex);
    };

    const handleCloseGallery = () => {
        setCloseGallery(false);
    };

    if (!closeGallery) return null;

    return (
        <div className="gallery-container">
            <div className="gallery">
                <button onClick={handleCloseGallery} className="close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fillRule="evenodd"/></svg>
                </button>

                <div className="images">
                    <div className="selected-image">
                        <button className="previous" onClick={handlePrevious}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </button>

                        <img src={currentProduct.image} alt={currentProduct.name} />

                        <button className="next" onClick={handleNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </button>
                    </div>

                    <div className="thumbnails">
                        {productData.products.map(product => (
                            <div
                                key={product.id}
                                className={`thumbnail-wrapper ${currentProduct.id === product.id ? 'selected' : ''}`}
                                onClick={() => handleThumbnailClick(product.id)}
                            >
                                <img
                                    src={product.thumbnail}
                                    alt={`Thumbnail of ${product.name}`}
                                    style={{ opacity: currentProduct.id === product.id ? 0.4 : 1 }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;