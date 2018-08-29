import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import {Route} from 'react-router-dom'
import Home from './components/home/Home';
import Notification from './components/common/Notification';
import Logout from './components/user/Logout'
import Login from './components/containers/NewLogin';
import register from './components/containers/NewRegister';
import Navbar from './components/common/Navigation'
import ItemsList from './components/item/ItemsList'
import CreateItem from './components/item/CreateItem'
import { withAdminAuthorizazition } from './components/user/withAutorization.hocks.ts'
import About from './components/home/About';
import './style/site.css'
import './style/Other.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Header />
          <Notification />
          <Navbar />
          {/* <Route path='/home' exact component={Home} /> */}
          {/* <Route path='/' render={() => <Redirect to ='/home' />} /> */}
          <Route path='/items' exact component={ItemsList} />
          <Route path='/logout' exact component={Logout} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={register} />
          <Route path="/createItem" exact component={CreateItem} />
          <Route path="/about" exact component={About} />
          <Route path="/test" exact component={withAdminAuthorizazition}  />
          </div>
      </div>
    );
  }
}

export default App;
