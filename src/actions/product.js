import productActionTypes from '../actionTypes/product';

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