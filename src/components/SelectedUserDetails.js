import React, { Component } from 'react';

class SelectedUserDetails extends Component {
    shouldComponentUpdate(nextProps){
        if(nextProps.info !== this.props.info){
            return true;
        }
        return false;
    }
    render(){
        console.log('render inside SelectedUserDetails');
        const { info } = this.props;
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
    }
    
};

export default SelectedUserDetails;