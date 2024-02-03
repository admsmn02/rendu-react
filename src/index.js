import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductsScreen from './Pages/ProductsScreen';
import ProductScreen from './Pages/ProductScreen';
import CartScreen from './Pages/CartScreen';
import NotFound from './Pages/NotFound';
import NoProduct from './Pages/NoProduct';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartProvider from './Contexts/CartProvider';

const router = createBrowserRouter([
 {
    path: '/',
    element: <ProductsScreen />,
    errorElement: <NotFound />
 },
 {
    path: '/products',
    element: <ProductsScreen />,
    errorElement: <NotFound />
 }, 
 {
    path: '/products/:productId/comments',
    element: <ProductScreen />,
    errorElement: <NoProduct/>
 }, 
 {
    path: '/cart',
    element: <CartScreen />,
    errorElement: <NotFound />
 }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <Provider store={store}>
    <CartProvider>
     <RouterProvider router={router}/>
    </CartProvider>
  </Provider>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();