import React from 'react';
import { useContext } from 'react';
import CartContext from '../Contexts/CartContext';
import styled from 'styled-components';
import Header from '../Components/Header';

const CartPageContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 2rem;
`;

const CartTitle = styled.h2`
 font-size: 2rem;
 margin-bottom: 1rem;
`;

const EmptyCartMessage = styled.p`
 font-size: 1.5rem;
 color: #777;
`;

const CartItemContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 border-bottom: 1px solid #eee;
 padding: 1rem 0;
`;

const CartItemImage = styled.img`
 width: 100px;
 height: auto;
 object-fit: cover;
`;

const CartItemInfo = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`;

const CartItemTitle = styled.h3`
 font-size: 1.25rem;
 margin: 0;
`;

const CartItemPrice = styled.p`
 font-size: 1rem;
 color: #777;
`;

const RemoveButton = styled.button`
 background: none;
 border: none;
 cursor: pointer;
 color: red;
 &:hover {
    color: darkred;
 }
`;

const EmptyCartButton = styled.button`
 background-color: #f44336; /* Red */
 border: none;
 color: white;
 padding: 15px 32px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 4px 2px;
 cursor: pointer;
 transition-duration: 0.4s;
 &:hover {
   background-color: #da190b; /* Darker red */
   color: white;
 }
`;

export default function CartPage() {
 const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
 const { removeFromCart, emptyCart } = useContext(CartContext);

 return (
    <>
      <Header />
      <CartPageContainer>
        <CartTitle>Your Cart</CartTitle>
        {cartItems.length > 0 && (
          <EmptyCartButton onClick={() => emptyCart()}>Empty Cart</EmptyCartButton>
        )}
        {cartItems.length === 0 ? (
          <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
        ) : (
          cartItems.map((item) => (
            <CartItemContainer key={item.id}>
              <CartItemImage src={item.image} alt={item.title} />
              <CartItemInfo>
                <CartItemTitle>{item.title}</CartItemTitle>
                <CartItemPrice>Price: ${item.price}</CartItemPrice>
              </CartItemInfo>
              {cartItems.length > 0 && (
                <RemoveButton onClick={() => removeFromCart(String(item.id))}>Remove Item</RemoveButton>
              )}
            </CartItemContainer>
          ))
        )}
      </CartPageContainer>
    </>
 );
};