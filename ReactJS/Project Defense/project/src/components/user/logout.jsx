import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import requester from '../../infrastructures/requester';

export default class logout extends Component {
    logout = () => {
        requester.post('user','_logout', 'kinvey')
            .then(res => { sessionStorage.removeItem('authtoken')})
    }

    render = ()=> <Redirect to ='/' />
}