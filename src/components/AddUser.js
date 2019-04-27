import React, { Component, createRef } from 'react';
import withMountAlert from '../withMountAlert';

class AddUser extends Component {
    constructor(props){
        super(props);
        this.nameInput = createRef();
        this.ageInput = createRef();
    }

    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps');
    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }

    // shouldComponentUpdate(nextProps){
    //     return false;
    // }

    onBtnClick = (e) => {
        e.preventDefault();
        if(this.nameInput.current.value){
            this.props.onAddUser({
                name: this.nameInput.current.value,
                age: this.ageInput.current.value
            });
        }
    };

    render() {
        // console.log('inside render');
        return (
            <form>
                <div>
                    <label>Name</label>
                    <input ref={this.nameInput} type="text" />   
                </div>
                <div>
                    <label>Age</label>
                    <input ref={this.ageInput} type="number" />   
                </div>
                <div>
                    <button onClick={this.onBtnClick}>Add User</button>
                </div>
            </form>
        )
    }
};

export default withMountAlert(AddUser, 'AddUser Component');