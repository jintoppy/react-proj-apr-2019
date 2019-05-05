import React, { useState } from 'react';
import MyList from './MyList';

import './App.css';

const App = () => {
  const [prodId, setProdId] = useState('1'); // ['1', fn]
  const onFirstBtnClick = () => {
    setProdId('1');
  };
  const onSecondBtnClick = () => {
    setProdId('2');
  };
  return (
    <div>
      Hello
      <button
        id="my-btn-1"
        onClick={onFirstBtnClick}>
        First
      </button>
      <button 
        id="my-btn-2"
        onClick={onSecondBtnClick}>
        Second
      </button>
      <MyList listName={prodId}  />
    </div>
  );
}

export default App;
