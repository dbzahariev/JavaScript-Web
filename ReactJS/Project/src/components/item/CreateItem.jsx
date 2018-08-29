import Requester from "../../infrastructures/Requester";
import React, { Component } from 'react';
import Observer from "../../infrastructures/Observer";

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null,
            price: null,
            categories: [],
            selectedCategory: ''
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
            let selectedCategoryOne = document.getElementById("selectedCategory").value.toString().toLowerCase()

            this.setState({ selectedCategory: selectedCategoryOne})

            Requester.post('appdata', this.state.selectedCategory.toLowerCase(), 'kinvey', { title: this.state.title, price: this.state.price})
                .then(res => {
                    Observer.trigger(Observer.events.notification, { type: 'success', message: `Item with name: ${this.state.title} was created!` })
                    this.setState({title: null, price: null})
                    let op = document.getElementById("selectedCategory").getElementsByTagName("option");
                    op[0].disabled = false
                    document.getElementById("selectedCategory").selectedIndex = "0"
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    selectCategory = () => {
        if (this.refs.selectedCategory.value !== 'Select category' || this.refs.selectedCategory.value !== '') {
            this.setState({ selectedCategory: this.refs.selectedCategory.value })
        }

        let op = document.getElementById("selectedCategory").getElementsByTagName("option");
        op[0].disabled = true
    }

    componentDidMount = () => {
        this.getCategory()
        Observer.trigger(Observer.events.notification, { type: 'success', message: "" })
    }

    getCategory = () => {
        Requester.get('appdata', 'category', 'kinvey')
            .then(res => {
                res.unshift({ title: 'Select category' })
                this.setState({ categories: res })
            })
            .catch(err => {
                let message = err.statusText;
                if (message === 'Unauthorized') {
                    message = 'Please login!'
                }
                Observer.trigger(Observer.events.notification, { type: 'error', message: message })
            })
    }

    render = () => {
        return (
            <form id="createForm" onSubmit={this.handleSubmit.bind(this)}>
                <h2>Create Item</h2>
                <select id="selectedCategory" ref="selectedCategory" value={this.state.selectedCategory}
                    onChange={(e) => this.selectCategory()}>
                    {this.state.categories.map((c, index) => { return <option key={index}>{c.title}</option> })}
                </select>
                <div className="form-group">
                    <label>Name:</label>
                    <input value={this.state.title || ""}  className="form-control" name="title" onChange={this.handleChange} type="text" />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input value={this.state.price||""} className="form-control" name="price" onChange={this.handleChange} type="text" />
                </div>
                <br/>
                <input id="btnCreate" className="btn btn-primary btn-sm mb-2" type="submit" defaultValue="Create Item" />
            </form>
        )
    }
}