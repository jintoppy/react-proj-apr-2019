import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './ProductList.css';

const ProductList = ({ products }) => {
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

export default connect(mapStateToProps)(ProductList)