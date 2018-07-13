import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import requester from '../../infrastructures/Requester';
import Observer from '../../infrastructures/Observer';
// import Requester from "../../infrastructures/Requester";

export default class logout extends Component {
    logout = () => {
        localStorage.clear()
        requester.post('user','_logout', 'kinvey')
            .then(res => {
                sessionStorage.removeItem('authtoken')
                Observer.trigger(Observer.events.loginUser, null)
                Observer.trigger(Observer.events.notification, { type: 'success', message: `` })
            }
        )
    }

    render = ()=> {
        this.logout()
        return <Redirect to ='/' />
    }
}