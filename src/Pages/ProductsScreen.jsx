import React, { useContext } from 'react';
import { useGetProductsQuery } from '../api';
import ProductCard from '../Components/ProductCard';
import CartProvider from '../Contexts/CartProvider';
import CartContext from '../Contexts/CartContext';
import styled from 'styled-components';
import Header from '../Components/Header';

const StyledProductList = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
`;

const ProductCardWrapper = styled.div`
 flex: 0 0 calc(33.33% - 10px); // Adjust the width to fit three cards per row
 margin-bottom: 20px; // Space between rows
`;

export default function ProductsScreen() {
 const { data, isLoading } = useGetProductsQuery();
 const cartContext = useContext(CartContext);

 if (isLoading) {
    return <div>Loading...</div>;
 }

 return (
    <CartProvider>
      <Header />
      <div>
        <h1 style={{textAlign: 'center'}}>All our products</h1>
        <StyledProductList>
          {data?.map((product) => (
            <ProductCardWrapper key={product.id}>
              <ProductCard product={product} cartContext={cartContext} />
            </ProductCardWrapper>
          ))}
        </StyledProductList>
      </div>
    </CartProvider>
 );
};