import React from 'react';

const SelectedUserDetails = ({info}) => {
    if( info === null) {
        return <span>No User Selected</span>
    }
    return (
        <div>
            <h2>Selected User</h2>
            <p>Name: {info.name}</p>  
            <p>Age: {info.age}</p>  
        </div>
    )
};

export default SelectedUserDetails;