const initialState = {
    list: [
        { id: 1, title: 'Iphone', company: 'Apple', price: 20},
        { id: 2, title: 'S7', company: 'Samsung', price: 10},
        { id: 3, title: 'Galaxy', company: 'Samsung', price: 30}
    ],
    selectedProduct: null
};

const productReducer = (state = initialState, action) => {
    return state;
};

export default productReducer;