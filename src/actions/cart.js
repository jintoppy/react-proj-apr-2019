import cartActionTypes from '../actionTypes/cart';

export const addToCart = (prodId) => {
    return {
        type: cartActionTypes.ADD_TO_CART,
        payload: prodId
    };
};