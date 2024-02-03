import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../Contexts/CartContext';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


const StyledHeader = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 20px;
 background-color: #f8f9fa;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
 margin-left: 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
`;

const NavItem = styled(Link)`
 margin-right: 20px;
 color: #333;
 text-decoration: none;
 position: relative; // Establish a positioning context

 &:hover {
    color: #007bff;
 }

 // Style for the span that shows the item count
 span {
    position: absolute;
    right: -10px; // Adjust as needed to position the circle correctly
    top: -10px; // Adjust as needed to position the circle correctly
    background-color: red; // Change the color as needed
    border-radius: 50%; // Make the span circular
    width: 20px; // Set the width of the circle
    height: 20px; // Set the height of the circle
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px; // Adjust the font size as needed
    color: white; // Change the text color as needed
 }
`;

export default function Header() {
  const location = useLocation();
  const [itemCount, setItemCount] = useState(0);
  const cartContext = useContext(CartContext);
 
  useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      setItemCount(storedCartItems ? storedCartItems.length : 0);
  }, [location, cartContext]);
 
  return (
     <StyledHeader>
       <Nav>
         <NavItem to="/">Home</NavItem>
         <NavItem to="/cart">
           <img width={40} height={40} src="cart.png" alt="Cart" />
           {itemCount > 0 && (
             <span>{itemCount}</span>
           )}
         </NavItem>
       </Nav>
     </StyledHeader>
  );
 }