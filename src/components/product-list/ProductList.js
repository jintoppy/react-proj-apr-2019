import React, { Component } from 'react';

import { 
    getProducts
} from '../../actions/product'; 
import { addToCart } from '../../actions/cart';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './ProductList.css';



class ProductList extends Component {
    componentWillMount() {
        this.props.getProducts();
    }
    render(){
        const { products, addToCart } = this.props;
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
                    <Link to={`/details/${prod.id}`}>View Details</Link>
                </div>
            )
        });
        return (
            <div className="product-list">
                    {divItems}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        products: state.products.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (prodId) => {
            const action = addToCart(prodId);
            dispatch(action);
        },
        getProducts: () => {
            dispatch(getProducts());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)