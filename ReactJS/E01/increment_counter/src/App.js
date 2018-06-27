import React from 'react';
import './App.css';
import render from './index'

let counter = 0;

const Counter = () => (
  <div className="App">
    <header className="App-header">
      {counter++}
    </header>
    <p className="App-intro">
      <button onClick={()=>render(Counter(), document.getElementById('root'))}>
        Click
      </button>
    </p>
  </div>
);

export default Counter;
