import React from 'react';

const Movie = (props) => {
    console.log('inside Movie Component');
    return (
        <h1>Title of movie is {props.data.title}</h1>
    )
};

export default Movie;