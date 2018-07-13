import React, {Component} from 'react'
import '../../style/header.css'
import Observer from '../../infrastructures/Observer'
import {Link} from 'react-router-dom'

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: null
        }

        Observer.subscribe(Observer.events.loginUser, this.userLoggedIn)
        // Observer.subscribe(Observer.events.logout, this.userLoggedIn)
    }

    userLoggedIn = username => this.setState({username})

    render= ()=>{
        const logout =
            <div id="profile">
                <span id="username">Hello, {this.state.username}!
                <Link to="/logout">logout</Link>
                </span>
            </div>


        const login =
            <div id="profile">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>

        return (
            <header>
                <span className="header">Welcome to our shop</span>
                <br/>
                {this.state.username ? logout : login}
            </header>
        )
    }
}