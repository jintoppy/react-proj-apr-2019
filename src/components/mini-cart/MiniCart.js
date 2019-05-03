import React from 'react';
import './MiniCart.css';

const MiniCart = ({cartList}) => {
    return <span>You have {cartList.length} items in your cart</span>;
};

export default MiniCart;