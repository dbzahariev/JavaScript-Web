import Requester from "../../infrastructures/Requester";
import React, { Component } from 'react';
import Observer from "../../infrastructures/Observer";

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

        Requester.post('user', '', 'basic', this.state)
            .then(res => {
                Observer.trigger(Observer.events.loginUser, res.username)
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
            })
    }

    render = () => {
        return (
        <form id="registerForm" onClick={this.handleSubmit}>
            <h2>Register</h2>
            <div className="form-group">
                <label>Username:</label>
                <input className="form-control" name="username" onChange={this.handleChange} type="text" />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input className="form-control" name="password" type="password" />
            </div>
            <div className="form-group">
                <label>Repeat Password:</label>
                <input className="form-control"  name="repeatPass" onChange={this.handleChange} type="password" />
            </div>
            <input id="btnRegister" className="btn btn-primary btn-sm mb-2" type="submit" defaultValue="Sign Up" />
        </form>
        )
    }
}