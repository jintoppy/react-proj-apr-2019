import productActionTypes from '../actionTypes/product';
const initialState = {
    list: [],
    loading: false,
    selectedProduct: null
};

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case productActionTypes.ON_GET_PRODUCT_DETAILS: {
            return {
                ...state,
                loading: true
            };
        }
        case productActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            };
        case productActionTypes.ON_GET_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                selectedProduct: action.payload,
                loading: false
            };
        default:
            return state;
    }
    return state;
};

export default productReducer;