import React from 'react'

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            user: {
                username:'',
                password:''
            }
        }
    }

    onInputChange(event){
        let user = this.state.user
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    onFormSubmitted(event){
        event.preventDefault()
        console.log(this.state.user)
    }
    
    render(){
    return(
        <form onSubmit={this.onFormSubmitted.bind(this)}>
            username:
            <input
                type='text'
                name='username'
                value={this.state.user.username}
                onChange={this.onInputChange.bind(this)}
            />
            <br />
            password:
            <input
                type='password'
                name='password'
                value={this.state.user.password}
                onChange={this.onInputChange.bind(this)}
            />
            <br />
            <input type='submit' />
        </form>
    )
}}
