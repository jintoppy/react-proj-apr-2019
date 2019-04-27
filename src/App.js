import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

const navItems = ['Home', 'About'];
const users = [
  {
    name: 'Ajith',
    age: 10
  },
  {
    name: 'Surya',
    age: 20
  },
  {
    name: 'Vijay',
    age: 30
  }
];
const App = () => {
  return (
    <div className="App">
        <AppHeader 
          menu={navItems}
          appTitle="React From Parent" />
        <section>
            <AppContent data={users} />
        </section>
    </div>
  );
}

export default App;
