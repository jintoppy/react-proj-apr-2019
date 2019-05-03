import React from 'react';
import { connect } from 'react-redux';
import './AppHeader.css';
import MiniCart from '../mini-cart/MiniCart';

const AppHeader = ({cartList}) => {
    return <div className="header">
        <h3>Shopping Cart</h3>  
        <MiniCart cartList={cartList} />
    </div>;
};

const mapStateToProps = (state) => {
    return {
        cartList: state.cart.list
    };
};

export default connect(mapStateToProps)(AppHeader);