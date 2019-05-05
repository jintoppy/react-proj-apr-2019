import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const url = 'http://5cc42b1c3f761f001422d42b.mockapi.io/api/products';

const MyList = ({listName}) => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`${url}/${listName}`)
            .then(res => {
                setProduct(res.data);
            });
    }, [listName]);
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