import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import {Route} from 'react-router-dom'
import Home from './components/home/Home';
import Notification from './components/common/Notification';
import Catalog from './components/catalog/Catalog';
import Logout from './components/user/Logout'
import Login from './components/containers/NewLogin';
import register from './components/containers/NewRegister';
import Navbar from './components/common/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Header />
          <Notification />
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/posts' exact component={Catalog} />
          <Route path='/logout' exact component={Logout} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={register} />
          </div>
      </div>
    );
  }
}

export default App;
