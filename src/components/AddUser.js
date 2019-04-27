import React, { Component } from 'react';
class AddUser extends Component {
    state = {
        name: '',
        age: ''
    };
    onBtnClick = (e) => {
        e.preventDefault();
        if(this.state.name){
            this.props.onAddUser({
                name: this.state.name,
                age: this.state.age
            });
        }
    };
    onChange = (evnt) => {
        const { name, value } = evnt.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <form>
                <div>
                    <label>Name</label>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                    />   
                </div>
                <div>
                    <label>Age</label>
                    <input 
                        type="number"
                        name="age"
                        value={this.state.age}
                        onChange={this.onChange}
                    />   
                </div>
                <div>
                    <button onClick={this.onBtnClick}>Add User</button>
                </div>
            </form>
        )
    }
};

export default AddUser;