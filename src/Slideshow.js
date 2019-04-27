import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slideshow extends Component {
    render(){
        return null;
    }
}

Slideshow.defaultProps = {
    slideTitle: 'My Slide title'
};

Slideshow.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    slideTitle: PropTypes.string
};

export default Slideshow;