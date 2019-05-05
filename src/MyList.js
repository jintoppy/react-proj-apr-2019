import React from 'react';
import PropTypes from 'prop-types';

const url = 'http://5cc42b1c3f761f001422d42b.mockapi.io/api/products';

const MyList = ({listName}) => {
    return (
        <div>
            <h3>List name is {listName}</h3>
        </div>
    )
};

MyList.propTypes = {
    listName: PropTypes.string.isRequired
};

export default MyList;