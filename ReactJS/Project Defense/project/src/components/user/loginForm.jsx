import requester from "../../infrastructures/requester";
import React, { Component } from 'react';
import observer from "../../infrastructures/observer";

export default class LoginForm extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            username: null,
            password: null
        }
    }

    handleChange = ev => {
        let fieldName = ev.target.name
        let fieldValue = ev.target.value

        this.setState({[fieldName]: fieldValue})
    }

    handleSubmit = ev => {
        ev.preventDefault()

        requester.post('user', 'login', 'basic', this.state)
            .then(res => {
                observer.trigger(observer.events.loginUser, res.username)
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
            })
    }

    render = ()=>{
        return (
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input name="username" onChange={this.handleChange} type="text" />
                <label>Password:</label>
                <input name="password" onChange={this.handleChange} type="password" />
                <input id="btnLogin" type="submit" value="Sign In" />
            </form>
        )
    }
}