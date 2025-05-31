import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import ProductsPage from './components/ProductsPage';
import CreateProduct from './components/CreateProduct';
import Reviews from './components/Reviews';
import { ProductProvider } from './context/productContext'; 
import ProductDetail from './components/ProductDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<App />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/create-product' element={<CreateProduct />} />
      <Route path='/reviews' element={<Reviews />} />
       <Route path="/:id" element={<ProductDetail />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider> 
      <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>
);
