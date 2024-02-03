import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
  };

  const removeFromCart = (itemId) => {
    let storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemIndex = storedCartItems.findIndex(item => item.id === itemId);
   
    if (itemIndex !== -1) {
       // Remove the item from the array
       storedCartItems.splice(itemIndex, 1);
       // Update the state and local storage
       setCartItems(storedCartItems);
       localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
    }
   };

  const emptyCart = () => {
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;