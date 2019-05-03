import React, { Component } from 'react';
import AppHeader from './components/app-header/AppHeader';
import ProductList from './components/product-list/ProductList';
import ProductDetails from './components/product-details/ProductDetails';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <AppHeader />
          <section>
              <ProductList />
              <ProductDetails />
          </section>
      </div>
    );
  }
}

export default App;
