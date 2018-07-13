import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import {Route} from 'react-router-dom'
import Home from './components/home/Home';
import Notification from './components/common/Notification';
import Catalog from './components/common/Navigation';
import Logout from './components/user/Logout'
import Login from './components/containers/NewLogin';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Header />
          <Notification />
          <Route path='/' exact component={Home} />
          <Route path='/catalog' exact component={Catalog} />
          <Route path='/logout' exact component={Logout} />
          <Route path="/login" exact component={Login} />
          </div>
      </div>
    );
  }
}

export default App;
