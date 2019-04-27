import React, { Component } from 'react';
import axios from 'axios';
import SelectedUserDetails from './components/SelectedUserDetails';
import AddUser from './components/AddUser';
import Users from './components/Users';
import './App.css';

const url = 'http://5cc42b1c3f761f001422d42b.mockapi.io/api/users';

class App extends Component {
  state = {
    users: [],
    selectedUser: null
  };

  componentWillMount(){
    const promise = axios.get(url);
    promise.then(res => {
      this.setState({
        users: res.data
      });
    });
  }

  selectUser = (usr) => {
    this.setState({
      selectedUser: usr
    });
  }

  // onAddUser = (newUser) => {
  //   axios
  //     .post(url, newUser)
  //     .then(() => axios.get(url))
  //     .then(res => {
  //       this.setState({
  //         users: res.data
  //       });
  //     });
  // }

  onAddUser = async (newUser) => {
    await axios.post(url, newUser);
    const res = await axios.get(url);
    this.setState({
      users: res.data
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
