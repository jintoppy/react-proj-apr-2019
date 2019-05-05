import React from 'react';
import PropTypes from 'prop-types';

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