import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ match }) => {
    return <div>
        {match.params.title}
    </div>;
};

export default ProductDetails;