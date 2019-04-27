import React, { Component } from 'react';
import SelectedUserDetails from './components/SelectedUserDetails';
import AddUser from './components/AddUser';
import Users from './components/Users';
import './App.css';

const url = 'http://5cc42b1c3f761f001422d42b.mockapi.io/api/users';

class App extends Component {
  state = {
    users: [
      {name:'Ajith', age: 10},
      {name:'Vijay', age: 20}
    ],
    selectedUser: null
  };

  selectUser = (usr) => {
    this.setState({
      selectedUser: usr
    });
  }

  onAddUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser]
    });
  }

  render() {
    return (
      <div className="App">
          <Users users={this.state.users} selectUser={this.selectUser} />
          <AddUser onAddUser={this.onAddUser} />
          <SelectedUserDetails info={this.state.selectedUser} />
      </div>
    );
  }
}

export default App;
