import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './ProductDetails.css';

const url = 'http://5cc42b1c3f761f001422d42b.mockapi.io/api/products';

class ProductDetails extends Component {
    componentWillMount() {
        const currentProductId = this.props.match.params.productId;
        axios.get(`${url}/${currentProductId}`)
             .then(res => {

             });
    }
    render(){
        return <div>
            {this.props.match.params.productId}
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
          
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);