import React, { useState } from 'react';
import { usePostProductCommentMutation } from '../api';
import CartContext from '../Contexts/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const CardContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 border: 1px solid #ddd;
 margin: 10px;
 padding: 20px;
 width: 350px;
 height: 90%;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 background-color: #fff;
`;

const Image = styled.img`
 width: 100%;
 height: auto;
 object-fit: cover;
 border-radius: 5px;
`;

const Title = styled.h3`
 font-size: 1.2em;
 margin-top: 15px;
 margin-bottom: 10px;
 font-weight: bold;
 color: #333;
`;

const Description = styled.p`
 font-size: 0.9em;
 margin-bottom: 15px;
 color: #666;
`;

const Price = styled.p`
 font-size: 1.1em;
 font-weight: bold;
 color: #333;
 margin-bottom: 15px;
`;

const Button = styled.button`
 background-color: #007bff;
 color: white;
 border: none;
 padding: 10px 20px;
 cursor: pointer;
 transition: background-color 0.3s ease, transform 0.3s ease;
 border-radius: 5px;
 margin-bottom: 10px;
 width: 100%;

 &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
 }
`;

const FormInput = styled.input`
 margin-bottom: 10px;
 padding: 10px;
 width: 93%;
 border: 1px solid #ccc;
 border-radius: 5px;
`;

const FormButton = styled.button`
 background-color: #007bff;
 color: white;
 border: none;
 padding: 10px 20px;
 cursor: pointer;
 transition: background-color 0.3s ease, transform 0.3s ease;
 border-radius: 5px;
 width: 100%;

 &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
 }
`;

export default function ProductCard({ product }) {
   const { addToCart } = useContext(CartContext);
   const [postComment] = usePostProductCommentMutation();
   const [newComment, setNewComment] = useState('');
   const [username, setUsername] = useState('');
  
   const location = useLocation();
   const showAddToCartButton = !location.pathname.includes('/comments');
  
   const handleAddToCart = () => {
      addToCart(product);
   };
  
   const handleSubmitComment = async (e) => {
      e.preventDefault();
      await postComment({ productId: product.id, username, comment: newComment });
      setNewComment('');
      setUsername('');
   };
  
   return (
      <CardContainer>
        <Image src={product.image} alt={product.title} />
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>Price: ${product.price}</Price>
        {showAddToCartButton && (
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        )}
        <Link to={`/products/${product.id}/comments`}><img width="20" height="20" src="https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png" alt="" /></Link>
        <form onSubmit={handleSubmitComment}>
          <FormInput
            type="text"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormInput
            type="text"
            placeholder="Your comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <FormButton type="submit">Submit Comment</FormButton>
        </form>
      </CardContainer>
   );
  }