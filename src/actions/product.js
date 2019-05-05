import axios from 'axios';
import productActionTypes from '../actionTypes/product';

const url = 'http://5cc42b1c3f761f001422d42b.mockapi.io/api/products';

export const onGetProducts = () => ({
    type: productActionTypes.GET_PRODUCTS
});

export const onGetProductsSuccess = data => ({
    type: productActionTypes.GET_PRODUCTS_SUCCESS,
    payload: data
});

export const onGetProductDetails = () => ({
    type: productActionTypes.ON_GET_PRODUCT_DETAILS                
});

export const onGetProductDetailsSuccess = data => ({
    type: productActionTypes.ON_GET_PRODUCT_DETAILS_SUCCESS,
    payload: data              
});

export const getProducts = () => dispatch => {
    dispatch(onGetProducts());
    axios.get(url)
        .then(res => {
            dispatch(onGetProductsSuccess(res.data));
        });
};

export const getProductDetails = productId => dispatch => {
    dispatch(onGetProductDetails());
    axios.get(`${url}/${productId}`)
        .then(res => {
            dispatch(onGetProductDetailsSuccess(res.data));
        });
};

