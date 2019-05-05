import React from 'react';
import useProduct from './useProductHook';
import PropTypes from 'prop-types';

const MyList = ({listName}) => {
    const product = useProduct(listName);
    if(!product){
        return <h4>No Product details available</h4>
    }
    return (
        <div>
            <h3>{product.title}</h3>
        </div>
    )
};

MyList.propTypes = {
    listName: PropTypes.string.isRequired
};

export default MyList;