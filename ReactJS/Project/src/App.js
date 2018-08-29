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
import CreateCategory from './components/category/CreateCategory'
import CategorysList from './components/category/CategorysList'
import DeleteCategory from './components/category/deleteCategory.jsx'
import DetailsCategory from './components/category/detailsCategory.jsx'
import EditCategory from './components/category/editCategory'
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
          <Route path='/home' exact component={Home} />
          <Route path='/items' exact component={ItemsList} />
          <Route path='/categorys' exact component={CategorysList} />
          <Route path='/logout' exact component={Logout} />
          <Route path='/deleteCategory/:id' exact component={DeleteCategory} />
          <Route path='/category/details/:id' exact component={DetailsCategory} />
          <Route path='/category/edit/:id' exact component={EditCategory} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={register} />
          <Route path="/createItem" exact component={CreateItem} />
          <Route path="/createCategory" exact component={CreateCategory} />
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
          </div>
      </div>
    );
  }
}

export default App;
