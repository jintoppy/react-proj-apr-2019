import cartActionTypes from '../actionTypes/cart';
const initialState = {
    list: []
};

const cartReducer = (state = initialState, action) => {
    if(action.type === cartActionTypes.ADD_TO_CART){
        return {
            ...state,
            list: [...state.list, action.payload]
        };
    }
    return state;
};

export default cartReducer;