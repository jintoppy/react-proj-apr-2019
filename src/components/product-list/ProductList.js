import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
        const divItems = products.map(prod => {
            return (
                <div key={prod.id} className="product-list-item">
                    <h2>{ prod.title}</h2>
                    <p>
                        Company: { prod.company}
                    </p>
                    <p>
                        Price: { prod.price }
                    </p>
                    <button onClick={() => addToCart(prod.id)}>Add to cart</button>
                    <Link to={`/details/${prod.title}`}>View Details</Link>
                </div>
            )
        });
        return (
            <div className="product-list">
                    {divItems}
            </div>
        );
};

const mapStateToProps = (state) => {
    return {
        products: state.products.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (prodId) => {
            dispatch({
                type: 'ADD_TO_CART',
                payload: prodId
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)