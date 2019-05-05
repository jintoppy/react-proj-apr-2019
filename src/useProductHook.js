import { useEffect, useState } from 'react';
import axios from 'axios';
const url = 'http://5cc42b1c3f761f001422d42b.mockapi.io/api/products';

const useProduct = (listName) => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`${url}/${listName}`)
            .then(res => {
                setProduct(res.data);
            });
    }, [listName]);
    return product;
};

export default useProduct;