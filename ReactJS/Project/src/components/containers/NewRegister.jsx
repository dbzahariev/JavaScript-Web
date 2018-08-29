import React, { Component } from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../../style/NewRegisterFom.css';

import Observer from '../../infrastructures/Observer';
import Requester from "../../infrastructures/Requester";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = ev => {
    let fieldName = ev.target.name
    let fieldValue = ev.target.value

    this.setState({ [fieldName]: fieldValue })
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ newUser: this.state.email });

    Requester.post('user', '', 'basic', {roles: ['none'], username: this.state.email, email: this.state.email, password: this.state.password })
      .then(res => {
        Observer.trigger(Observer.events.loginUser, res.email)
        sessionStorage.setItem('authtoken', res._kmd.authtoken)
        sessionStorage.setItem('email', this.state.email)
        sessionStorage.setItem('roles', res.roles)

      })
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
            name="confirmPassword"
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
        >Signup</Button>
      </form>
    );
  }

  

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.props.history.push('/home')}
      </div>
    );
  }
}
