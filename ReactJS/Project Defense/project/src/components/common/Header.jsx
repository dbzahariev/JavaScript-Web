import React, {Component} from 'react'
import '../../style/header.css'
import Observer from '../../infrastructures/Observer'
import {Link} from 'react-router-dom'

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: null
        }

        Observer.subscribe(Observer.events.loginUser, this.userLoggedIn)
        
    }

    userLoggedIn = email => this.setState({email})

    componentDidMount() {
        Observer.subscribe(Observer.events.loginUser, this.userLoggedIn)
        this.setState({email: sessionStorage.getItem('email')})
    }

    render= ()=>{
        const logout =
            <div id="profile">
                <span id="email">Hello, {this.state.email}!
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
                {this.state.email ? logout : login}
            </header>
        )
    }
}