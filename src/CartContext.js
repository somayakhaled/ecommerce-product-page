import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        if (quantity <= 0) return;
        
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id); //check if the product already exists in the cart

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
                
            } else {
                return [...prevItems, { 
                    ...product, 
                    quantity 
                }];
                
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

