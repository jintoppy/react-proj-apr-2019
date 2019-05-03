import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class About extends Component {
    state = {
        count: 1
    }
    onBtnClick = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            };
        });
    }
    render(){
        return (
            <div>
                About
                <button onClick={this.onBtnClick}>Go Home</button>  
                {this.state.count > 3 && <Redirect to="/" />}
            </div>
        )
    }
}

export default About;