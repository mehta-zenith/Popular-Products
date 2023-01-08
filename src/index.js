import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './components/Product';
import ProductList from './components/ProductList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <div className = "ui unstackable items" >
        <ProductList />
    </div>
);