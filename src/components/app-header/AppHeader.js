import React from 'react';
import { connect } from 'react-redux';
import './AppHeader.css';
import MiniCart from '../mini-cart/MiniCart';

const AppHeader = ({cartList, isProductLoading}) => {
    return <div className="header">
        <h3>Shopping Cart</h3>  
        {isProductLoading ? <span>Product Loading....</span>: null }
        <MiniCart cartList={cartList} />
    </div>;
};

const mapStateToProps = (state) => {
    return {
        cartList: state.cart.list,
        isProductLoading: state.products.loading
    };
};

export default connect(mapStateToProps)(AppHeader);