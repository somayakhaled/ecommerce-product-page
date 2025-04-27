import { useState }  from 'react';
import Gallery from './Gallery';
import { useCart } from './CartContext';

const productData = {  
    products: [  
        {  
            id: 1,  
            name: "products1",  
            image: "/images/image-product-1.jpg",  
            thumbnail: "/images/image-product-1-thumbnail.jpg"  
        },  
        {  
            id: 2,  
            name: "products2",   
            image: "/images/image-product-2.jpg",  
            thumbnail: "/images/image-product-2-thumbnail.jpg"  
        },  
        {  
            id: 3,  
            name: "products3",   
            image: "/images/image-product-3.jpg",  
            thumbnail: "/images/image-product-3-thumbnail.jpg"  
        },  
        {  
            id: 4,  
            name: "products4", 
            image: "/images/image-product-4.jpg",  
            thumbnail: "/images/image-product-4-thumbnail.jpg"  
        }  
    ]  
};  


const Home = () => {
    const { addToCart } = useCart();
    const [currentImage, setCurrentImage] = useState(productData.products[0].image);
    const [selectedThumbnail, setSelectedThumbnail] = useState(productData.products[0].id);
    const [quantity, setQuantity] = useState(0);
    const [isGalleryVisible, setGalleryVisible] = useState(false);

    const handleAddToCart = () => {
        if (quantity <= 0) return;
        
        const product = {
            id: 1,
            name: "Fall Limited Edition Sneakers",
            price: 125.00,
            thumbnail: "/images/image-product-1-thumbnail.jpg"
        };
        
        addToCart(product, quantity);
        setQuantity(0); 
    };

    const increase = () => {
        setQuantity(prev => prev + 1);
    }

    const decrease = () => {
        if(quantity >= 1){
            setQuantity(prev => prev -1);
        }
    }

    const handleThumbnailClick = (image, id) => {
        setCurrentImage(image);
        setSelectedThumbnail(id);
    }

    const handleShowGallery = () => {
        if(!isGalleryVisible){
            setGalleryVisible(true);
        } else setGalleryVisible(false);
    }

    return (
        <div className="main-container">
            <section className="left-container">
                <div className="selected-image">
                    <img src={currentImage} onClick={handleShowGallery} alt="" />
                </div>

                <div className="thumbnails">
                    {productData.products.map(product => (
                        <div
                            key={product.id}
                            className={`thumbnail-wrapper ${selectedThumbnail === product.id ? 'selected' : ''}`}
                            onClick={() => handleThumbnailClick(product.image, product.id)}
                        >
                            <img 
                                src={product.thumbnail}
                                alt={`Thumbnail of ${product.name}`}
                                style={{ opacity: selectedThumbnail === product.id ? 0.4 : 1 }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="right-container">
                <h4>Sneaker Company</h4>

                <h1>Fall Limited Edition Sneakers</h1>

                <p>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

                <div className="price-info">
                    <div className="price-and-discount">
                        <h2 className="current-price">$125.00</h2>
                        <div className="discount">50%</div>
                    </div>
                    <div className="prev-price">$250.00</div>
                </div>

                <div className="quntity-addToCart">
                    <div className="quantity">
                        <span onClick={decrease} className="minus">
                            <img src="/images/icon-minus.svg" alt="minus" />
                        </span>
                        <span>{quantity}</span>
                        <span onClick={increase} className="plus">
                            <img src="/images/icon-plus.svg" alt="plus" />
                        </span>
                    </div>

                    
                    <button className="AddToCart" onClick={handleAddToCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" className='cart'><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="hsl(220, 13%, 13%)" fill-rule="nonzero"/></svg>
                        <h3>Add to cart</h3>
                    </button>
                </div>
            </section>

            {isGalleryVisible && <Gallery />}
        </div>
    );
}
 
export default Home;

