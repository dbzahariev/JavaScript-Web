import Requester from "../../infrastructures/Requester";
import React, { Component } from 'react';
import Observer from "../../infrastructures/Observer";
import requester from '../../infrastructures/Requester'

export default class EditCategoryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null,
            id: null

        }
    }

    handleChange = ev => {
        let fieldName = ev.target.name
        let fieldValue = ev.target.value

        this.setState({ [fieldName]: fieldValue })
    }

    handleSubmit = ev => {
        ev.preventDefault()


        if (sessionStorage.getItem('roles').indexOf('admin') === -1){
            Observer.trigger(Observer.events.notification, { type: 'error', message: "Please login as admin" })
        } else {
            Requester.update('appdata', 'category/' + this.state.id, 'kinvey', { title: this.state.title})
                .then(res => {
                    Observer.trigger(Observer.events.notification, { type: 'success', message: `Item with name: ${this.state.title} was created!` })
                    this.setState({title: null})
                    
                })
                .catch(err => {
                    Observer.trigger(Observer.events.notification, { type: 'error', message: err.message })
                })
        }
    }

    componentDidMount = () => {
        Observer.trigger(Observer.events.notification, { type: 'success', message: "" })
        

        
        let postId = this.props.match.params.id;
        requester.get('appdata', 'category/' + postId, 'kinvey')
            .then(res => {
                this.setState({
                    title: res.title,
                    id: postId
                  });
                })                
            .catch(console.log);
    }

    render = () => {
        return (
            <form id="EditForm" onSubmit={this.handleSubmit.bind(this)}>
                <h2>Edit Category</h2>
                <div className="form-group">
                    <label>Name:</label>
                    <input value={this.state.title || ""}  className="form-control" name="title" onChange={this.handleChange} type="text" />
                </div>
                <br/>
                <input id="btnCreate" className="btn btn-primary btn-sm mb-2" type="submit" defaultValue="Edit Category" />
            </form>
        )
    }
}