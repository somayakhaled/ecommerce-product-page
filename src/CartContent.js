import { useCart } from './CartContext';
import PropTypes from 'prop-types';

const CartContent = ({ item }) => {
    const { removeFromCart } = useCart();

    return (
        <div className="content-container">
            <div className="added-product">
                <div className="product-img">
                    <img src={item.thumbnail} alt={item.name} />
                </div>
                <div className="product-info">
                    <div className="product-name">{item.name}</div>
                    <div className="product-price-info">
                        <div className="price">${item.price.toFixed(2)}</div>
                        <div className="quantity">x {item.quantity}</div>
                        <div className="total-price">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                </div>
                <button onClick={() => removeFromCart(item.id)}> 
                    <svg width="14" height="16">  
                        <defs>  
                            <path   
                                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"  
                                id="a"  
                            />  
                        </defs>  
                        <use fill="#C3CAD9" fillRule="nonzero" href="#a" />  
                    </svg>
                </button>
            </div>
            <button className="checkout">Checkout</button>
        </div>
    );
}

// Add prop type validation
CartContent.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired
    }).isRequired
};

export default CartContent;