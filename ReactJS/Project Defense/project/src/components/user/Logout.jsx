import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import requester from '../../infrastructures/Requester';

export default class logout extends Component {
    logout = () => {
        requester.post('user','_logout', 'kinvey')
            .then(res => { sessionStorage.removeItem('authtoken')})
    }

    render = ()=> {
        this.logout()
        console.log('bye')
        return <Redirect to ='/' />}
}