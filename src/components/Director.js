import React, { Fragment } from 'react';

const Director = ({details}) => {
    console.log('inside Director Component');
    return (
        <Fragment>
            <h1>Director name is {details.name}</h1>
            <span>Movies: {details.movies}</span>
        </Fragment>
    )
};

export default Director;