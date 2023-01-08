import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './components/Product';
import ProductList from './components/ProductList';
import "./index.css";
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <div className='ui container'>
        <Header
        title ="Popular Products"
        />
        <ProductList/>

    </div>
);