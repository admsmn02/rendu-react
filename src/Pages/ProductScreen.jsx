import React, { useContext } from 'react';
import { useGetProductsQuery, useGetProductCommentsQuery } from '../api';
import ProductCard from '../Components/ProductCard';
import CartProvider from '../Contexts/CartProvider';
import CartContext from '../Contexts/CartContext';
import { useParams } from 'react-router-dom';

export default function ProductScreen() {
 const { data, isLoading } = useGetProductsQuery();
 const { productId } = useParams();
 const { data: commentsData, isLoading: commentsLoading } = useGetProductCommentsQuery(productId);
 console.log('comments',commentsData);
 const cartContext = useContext(CartContext);

 const product = data?.find((product) => product.id === productId);

 if (isLoading || commentsLoading) {
    return <div>Loading...</div>;
 }

 return (
    <CartProvider>
      <div>
        <h1>Product numéro {productId}</h1>
        <div className="product-list">
          <ProductCard key={product.id} product={product} cartContext={cartContext} />
        </div>
        <div className="comments-section">
          <h2>Comments</h2>
          {commentsData && commentsData.map((comment, index) => (
            <div key={index}>
              <p>{comment.comment}</p>
              <p>By: {comment.username}</p>
            </div>
          ))}
        </div>
      </div>
    </CartProvider>
 );
};