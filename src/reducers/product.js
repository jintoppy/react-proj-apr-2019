const initialState = {
    list: [],
    selectedProduct: null
};

const productReducer = (state = initialState, action) => {
    console.log('productReducer');
    console.log(action);
    if(action.type === 'GET_PRODUCTS_SUCCESS'){
        return {
            ...state,
            list: action.payload
        };
    }
    return state;
};

export default productReducer;