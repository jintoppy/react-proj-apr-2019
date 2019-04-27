import React, { Component } from 'react';
import Slideshow from './Slideshow';
import './App.css';

class App extends Component {
  state = {
    cats: [
      'https://i.imgur.com/dejTHdE.jpg',
      'https://i.imgur.com/7cpsFeQ.jpg',
      'https://i.imgur.com/ioJ0gtK.jpg',
      'https://i.imgur.com/xbXN9Y1.png'
    ],
    dogs: [
      'https://i.imgur.com/tnjGTBM.jpg',
      'https://i.imgur.com/XsaLqi1.jpg',
      'https://i.imgur.com/2cGhWub.jpg',
      'https://i.imgur.com/ThWoXl7.jpg'
    ]
  }
  render() {
    return (
      <div className="App">
        Hello
        <Slideshow data={this.state.cats} slideTitle="Cat Slideshow"/>
        <Slideshow data={this.state.dogs} slideTitle="Dogs"/>
      </div>
    );
  }
}

export default App;
