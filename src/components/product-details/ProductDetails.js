import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getProductDetails
} from '../../actions/product'; 
import './ProductDetails.css';

class ProductDetails extends Component {
    componentWillMount() {
        this.props.getProductDetails(this.props.match.params.productId);
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
          getProductDetails: (pId) => {
            dispatch(getProductDetails(pId));
          }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);