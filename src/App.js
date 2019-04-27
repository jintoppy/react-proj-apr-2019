import React, { Component } from 'react';
import Content from './Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello
        <Content>
            <p>This is a trial</p>
        </Content>

        <Content>
            <h3>This is a header</h3>
        </Content>
      </div>
    );
  }
}

export default App;
