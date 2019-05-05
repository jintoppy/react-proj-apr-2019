import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    onGetProductDetails,
    onGetProductDetailsSuccess 
} from '../../actions/product'; 
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
        const { isInProgress, details } = this.props;
        if(isInProgress){
            return <h3>Loading....</h3>
        }
        if(details){
            return <div>
                <h2>{details.title}</h2>    
                <p>{details.company}</p>    
            </div>;
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.products.selectedProduct,
        isInProgress: state.products.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
          onGetProductDetails: () => {
            dispatch(onGetProductDetails());
          },
          onGetProductDetailsSuccess: (data) => {
            dispatch(onGetProductDetailsSuccess(data));
          }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);