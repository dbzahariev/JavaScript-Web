import React, { Component } from 'react'
import observer from '../../infrastructures/Observer';
import '../../style/notifications.css'

export default class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: null,
            error: null,
            loading: null,
        }


        // observer.subscribe(observer.events.notification, this.showNotification)
    }

    showNotification = data => {
        // let message = data.message
        // let type = data.type
        // this.setState({ type: message })
    }

    // hideNotification = ev => this.setState = { success: null, error: null, loading: null }

    render = () => {
        // if (this.state.success) {
        //     return <div id="infoBox" className="alert alert-success  alert-dismissible"><strong>Success!</strong> {this.state.success}</div>
        // } else if (this.state.error) {
        //     return <div id="errorBox" className="alert alert-danger  alert-dismissible"><strong>Error!</strong> {this.state.error}</div>
        // } else if (this.state.loading) {
        //     return <div id="loadingBox" className="alert alert-info  alert-dismissible"><strong>Loading!</strong> {this.state.loading}</div>
        // }

        return null
    }
}
