import React, { useContext } from 'react';
import { useGetProductsQuery } from '../api';
import ProductCard from '../Components/ProductCard';
import CartProvider from '../Contexts/CartProvider';
import CartContext from '../Contexts/CartContext';

export default function ProductsScreen() {
 const { data, isLoading } = useGetProductsQuery();
 const cartContext = useContext(CartContext);

 if (isLoading) {
    return <div>Loading...</div>;
 }

 return (
    <CartProvider>
      <div>
        <h1>Products Screen</h1>
        <div className="product-list">
          {data?.map((product) => (
            <ProductCard key={product.id} product={product} cartContext={cartContext} />
          ))}
        </div>
      </div>
    </CartProvider>
 );
};