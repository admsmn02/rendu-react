import React, { useState } from 'react';
import { usePostProductCommentMutation } from '../api';
import CartContext from '../Contexts/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border: 1px solid #ddd;
 margin: 10px;
 padding: 20px;
 max-width: 200px;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const Image = styled.img`
 width: 100%;
 height: auto;
 object-fit: cover;
`;

const Title = styled.h3`
 font-size: 1.5em;
 margin-top: 15px;
 margin-bottom: 10px;
 font-weight: bold;
`;

const Description = styled.p`
 font-size: 1em;
 margin-bottom: 15px;
 color: #666;
`;

const Price = styled.p`
 font-size: 1.2em;
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
 transition: background-color 0.3s ease;
 border-radius: 5px;
 margin-bottom: 10px;

 &:hover {
    background-color: #0056b3;
 }
`;

const FormInput = styled.input`
 margin-bottom: 10px;
 padding: 10px;
 width: 100%;
 border: 1px solid #ccc;
 border-radius: 5px;
`;

const FormButton = styled.button`
 background-color: #007bff;
 color: white;
 border: none;
 padding: 10px 20px;
 cursor: pointer;
 transition: background-color 0.3s ease;
 border-radius: 5px;

 &:hover {
    background-color: #0056b3;
 }
`;

export default function ProductCard({ product }) {
 const { addToCart, cartItems } = useContext(CartContext);
 const [postComment] = usePostProductCommentMutation();
 const [newComment, setNewComment] = useState('');
 const [username, setUsername] = useState('');

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
      <Button onClick={handleAddToCart}>Add to Cart</Button>
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