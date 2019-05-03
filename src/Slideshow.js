import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slideshow.css';

class Slideshow extends Component {
    state = {
        currentIndex: 0
    }

    onNextClick = () => {
        if(this.state.currentIndex === this.props.data.length-1){
            this.setState({
                currentIndex: 0
            });
        }
        else {
            // this.setState({
            //     currentIndex: this.state.currentIndex + 1
            // });
            this.setState(prevState => {
                return {
                    currentIndex:  prevState.currentIndex +1  
                };
            });
        }
        
    }

    onPrevClick = () => {
        if ( this.state.currentIndex === 0) {
            this.setState({
                currentIndex: this.props.data.length-1
            });
        }
        else {
            this.setState({
                currentIndex: this.state.currentIndex - 1
            });
        }
    }

    render(){

        return (
            <div>
                <h2>{this.props.slideTitle}</h2>  
                <button onClick={this.onPrevClick}>Prev</button>
                <img 
                    className="my-img" 
                    src={this.props.data[this.state.currentIndex]} 
                />
                <button onClick={this.onNextClick}>
                    Next
                </button>
            </div>
        )
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