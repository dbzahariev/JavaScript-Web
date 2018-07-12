import React, { Component } from 'react'
import observer from '../../infrastructures/Observer';
import '../../style/notifications.css'

const DEFAULT_STATE = {
    success: null,
    error: null,
    loading: null,
};

export default class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = DEFAULT_STATE

        observer.subscribe(observer.events.notification, this.showNotification)
    }

    showNotification = data => {
        let message = data.message
        let type = data.type
        this.setState({ [type]: message })
    }

    hideNotification = ev => this.setState = DEFAULT_STATE

    render = () => {
        if (this.state.success) {
            return <div id="infoBox" className="notification"><span>{this.state.success}</span></div>
        } else if (this.state.error) {
            return <div id="errorBox" className="notification"><span>{this.state.error}</span></div>
        } else if (this.state.loading) {
            return <div id="loadingBox" className="notification"><span>{this.state.loading}</span></div>
        }

        return null
    }
}
