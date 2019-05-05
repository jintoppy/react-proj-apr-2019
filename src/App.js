import React, { Component } from 'react';
import MyList from './MyList';

import './App.css';

class App extends Component {
  state = {
    prodId: '1'
  }
  onFirstBtnClick = () => {
    this.setState({
      prodId: '1'
    });
  }
  onSecondBtnClick = () => {
    this.setState({
      prodId: '2'
    });
  }
  render() {
    return (
      <div>
        Hello
        <button 
          onClick={this.onFirstBtnClick}>
          First
        </button>
        <button 
          onClick={this.onSecondBtnClick}>
          Second
        </button>
        <MyList listName={this.state.prodId}  />
      </div>
    );
  }
}

export default App;
