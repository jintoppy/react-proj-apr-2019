import React from 'react';
import './AppHeader.css';
import MiniCart from '../mini-cart/MiniCart';

const AppHeader = () => {
    return <div className="header">
        <h3>Shopping Cart</h3>  
        <MiniCart />
    </div>;
};

export default AppHeader;