import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppHeader from './components/app-header/AppHeader';
import ProductList from './components/product-list/ProductList';
import ProductDetails from './components/product-details/ProductDetails';
import About from './About';

import './App.css';

class App extends Component {
  state = {
    activeView: 'details'
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <AppHeader />
            <section>
                <Route exact path="/" component={ProductList} />
                <Route path="/details/:productId" component={ProductDetails} />
                <Route path="/about" component={About} />
                <Route component={About} />
            </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
