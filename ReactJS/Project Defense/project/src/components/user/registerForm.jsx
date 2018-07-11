import requester from "../../infrastructures/requester";
import React, { Component } from 'react';
import observer from "../../infrastructures/observer";

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            password: null
        }
    }

    handleChange = ev => {
        let fieldName = ev.target.name
        let fieldValue = ev.target.value

        this.setState({ [fieldName]: fieldValue })
    }

    handleSubmit = ev => {
        ev.preventDefault()

        requester.post('user', '', 'basic', this.state)
            .then(res => {
                observer.trigger(observer.events.loginUser, res.username)
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
            })
    }

    render = () => {
        return (
        <form id="registerForm" onClick={this.handleSubmit}>
            <h2>Register</h2>
            <label>Username:</label>
            <input name="username" onChange={this.handleChange} type="text" />
            <label>Password:</label>
            <input name="password" type="password" />
            <label>Repeat Password:</label>
            <input name="repeatPass" onChange={this.handleChange} type="password" />
            <input id="btnRegister" type="submit" defaultValue="Sign Up" />
        </form>
        )
    }
}