import React, {Component} from 'react'
import '../../style/header.css'
import observer from '../../infrastructures/observer';

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: null
        }

        observer.subscriptions(observer.events.loginUser, this.userLoggedIn)
    }

    userLoggedIn = username => this.setState({username})

    render= ()=>{
        const loggedInSection = 
        <div id="profile">
            <span id="username">Hello, {this.state.username}!</span>
            <a href="" id="linkMenuLogout">logout</a>
        </div>

        return (
            <header>
                <span className="logo">&#9731;</span><span className="header">SeenIt</span>
                {this.state.username ? loggedInSection: null}
            </header>
        )
    }
}