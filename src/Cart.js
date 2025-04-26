import CartContent from "./CartContent";
import { useCart } from './CartContext';

const Cart = () => {
    const { cartItems } = useCart();

    return (
        <div className="cart-container">
            <div className="header">Cart</div>
            <div className="cart-body">
                {cartItems.length === 0 ? (
                    <h4>Your cart is empty.</h4>
                ) : (
                    cartItems.map(item => (
                        <CartContent 
                            key={item.id} 
                            item={item} 
                        />
                    ))
                )}
            </div>
        </div>
    );
}
 
export default Cart;