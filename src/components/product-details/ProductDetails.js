import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './ProductDetails.css';

const url = 'http://5cc42b1c3f761f001422d42b.mockapi.io/api/products';

class ProductDetails extends Component {
    componentWillMount() {
        this.props.onGetProductDetails();
        const currentProductId = this.props.match.params.productId;
        axios.get(`${url}/${currentProductId}`)
             .then(res => {
                this.props.onGetProductDetailsSuccess(res.data);
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
          onGetProductDetails: () => {

          },
          onGetProductDetailsSuccess: (data) => {

          }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);