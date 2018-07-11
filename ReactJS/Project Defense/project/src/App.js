import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import {Route} from 'react-router-dom'
import Home from './components/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/' exact component={Home} />
      </div>
    );
  }
}

export default App;
