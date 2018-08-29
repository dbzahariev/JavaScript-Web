import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../../style/NewLogin.css';


import Observer from '../../infrastructures/Observer';
import Requester from "../../infrastructures/Requester";


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = ev => {
        let fieldName = ev.target.name
        let fieldValue = ev.target.value

        this.setState({ [fieldName]: fieldValue })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('hi')

        Requester.post('user', 'login', 'basic', {username: this.state.email, password: this.state.password})
            .then(res => {
                Observer.trigger(Observer.events.loginUser, res.email)
                Observer.trigger(Observer.events.notification, { type: 'success', message: `Hello ${res.email}` })
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
                sessionStorage.setItem('email', this.state.email)
                sessionStorage.setItem('userId', res._id)
                // this.props.history.push('/home')
                document.location.href = '/home'
                console.log(res)
            })
            .catch(res => {
                console.log('email', this.state.email, 'pass', this.state.password)
                Observer.trigger(Observer.events.notification, { type: 'error', message: res.responseJSON.description })
                this.setState({ email: '', password: '' })
            })
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name='email'
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            name='password'
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}


