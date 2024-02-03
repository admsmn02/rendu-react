import React, { useContext } from 'react';
import { useGetProductsQuery, useGetProductCommentsQuery } from '../api';
import ProductCard from '../Components/ProductCard';
import CartProvider from '../Contexts/CartProvider';
import CartContext from '../Contexts/CartContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/Header';

const CommentSection = styled.div`
 margin-top: 2rem;
`;

const CommentContainer = styled.div`
 border: 1px solid #ccc;
 padding: 1rem;
 margin-bottom: 1rem;
 border-radius: 5px;
`;

const CommentAuthor = styled.span`
 font-weight: bold;
 color: #333;
`;

const CommentText = styled.p`
 margin: 0.5rem 0;
`;

const ProductList = styled.div`
 display: flex;
 justify-content: center;
 align-items: flex-start;
 flex-wrap: wrap;
 margin-top: 2rem;
`;

const AvatarImage = styled.img`
 width: 50px;
 height: 50px;
 border-radius: 50%;
 margin-right: 1rem;
`;

export default function ProductScreen() {
 const { data, isLoading } = useGetProductsQuery();
 const { productId } = useParams();
 const { data: commentsData, isLoading: commentsLoading } = useGetProductCommentsQuery(productId);
 const cartContext = useContext(CartContext);

 const product = data?.find((product) => product.id === productId);

 if (isLoading || commentsLoading) {
    return <div>Loading...</div>;
 }

 const lastFourComments = commentsData ? commentsData.slice(-4) : [];
 const otherComments = commentsData ? commentsData.slice(0, -4) : [];

 return (
  <>
    <Header />
    <CartProvider>
      <div>
        <ProductList>
          <ProductCard key={product.id} product={product} cartContext={cartContext} />
          <div className="last-five-comments">
            <h2>Last Four Comments</h2>
            {lastFourComments.map((comment, index) => (
            <CommentContainer key={index}>
              <AvatarImage src={`https://picsum.photos/50?random=${index}`} alt="User avatar" />
              <CommentText>{comment.comment}</CommentText>
              <CommentAuthor>By: {comment.username}</CommentAuthor>
            </CommentContainer>
            ))}
          </div>
        </ProductList>
        <CommentSection>
          <h2>Comments</h2>
          {otherComments && otherComments.map((comment, index) => (
            <CommentContainer key={index}>
              <AvatarImage src={`https://picsum.photos/50?random=${index}`} alt="User avatar" />
              <CommentText>{comment.comment}</CommentText>
              <CommentAuthor>By: {comment.username}</CommentAuthor>
            </CommentContainer>
          ))}
        </CommentSection>
      </div>
    </CartProvider>
  </>
 );
};