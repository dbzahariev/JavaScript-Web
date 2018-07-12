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
                <div className="form-group">
                    <label>Username:</label>
                    <input className="form-control" name="username" onChange={this.handleChange} type="text" value={this.state.username} />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input className="form-control" name="password" onChange={this.handleChange} type="password" value={this.state.password} />
                </div>
                <input id="btnLogin" className="btn btn-primary btn-sm mb-2" type="submit" value="Sign In" />
            </form>
        )
    }
}