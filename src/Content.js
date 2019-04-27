import React from 'react';
import './Content.css';

const Content = (props) => {
    return (
        <div className="my-content">
            {props.children}
        </div>
    )
};

export default Content;