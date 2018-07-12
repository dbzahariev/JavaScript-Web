import Requester from "../../infrastructures/Requester";
import React, { Component } from 'react';
import Observer from "../../infrastructures/Observer";

export default class LoginForm extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = ev => {
        let fieldName = ev.target.name
        let fieldValue = ev.target.value

        this.setState({[fieldName]: fieldValue})
    }

    handleSubmit = ev => {
        ev.preventDefault()

        Requester.post('user', 'login', 'basic', this.state)
            .then(res => {
                Observer.trigger(Observer.events.loginUser, res.username)
                Observer.trigger(Observer.events.notification, { type: 'success', message: `Hello ${res.username}` })
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
                this.props.history.push('/catalog')
            })
            .catch(res => {
                Observer.trigger(Observer.events.notification, { type: 'error', message: res.responseJSON.description })
                this.setState({username: '', password: ''})
            })
    }

    render = ()=>{
        return (
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input name="username" onChange={this.handleChange} type="text" value={this.state.username} />
                <label>Password:</label>
                <input name="password" onChange={this.handleChange} type="password" value={this.state.password} />
                <input id="btnLogin" type="submit" value="Sign In" />
            </form>
        )
    }
}