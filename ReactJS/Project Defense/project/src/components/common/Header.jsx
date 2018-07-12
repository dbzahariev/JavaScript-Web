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
    }

    userLoggedIn = username => this.setState({username})

    render= ()=>{
        const loggedInSection = 
            <div id="profile">
                <span id="username">Hello, {this.state.username}!
                <Link to="/logout">logout</Link>
                </span>
            </div>

        return (
            <header>
                <span className="header">Welcome to our shop</span>
                {this.state.username ? loggedInSection: null}
            </header>
        )
    }
}