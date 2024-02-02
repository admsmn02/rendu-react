import React from 'react';
import { useContext } from 'react';
import CartContext from '../Contexts/CartContext';
import Header from '../Components/Header';

export default function CartPage() {
 const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
 const { removeFromCart, emptyCart } = useContext(CartContext);

 return (
    <>
      <Header />
      <div className="cart-page">
        <h2>Your Cart</h2>
        <button onClick={() => emptyCart()}>Empty Cart</button>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(String(item.id))}>Remove Item</button>
            </div>
          ))
        )}
      </div>
    </>
 );
};