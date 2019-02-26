import React, { Component } from 'react'
import Requester from '../../infrastructures/Requester'
import Item from './Item'
import '../../style/post.css'
import Observer from '../../infrastructures/Observer';

export default class Catalog extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: [],
            categories: [],
            selectedCategory: ''
        }
    }

    getCategory = () => {
        Requester.get('appdata', 'category', 'kinvey')
            .then(res => {
                res.unshift({categoryTitle: 'Select category'})
                this.setState({ categories: res })
            })
            .catch(err=>{
                let message = err.statusText;
                if (message === 'Unauthorized'){
                    message = 'Please login!'
                }
                Observer.trigger(Observer.events.notification, { type: 'error', message: message })
            })
    }

    componentDidMount = ()=> {
        this.getCategory()
        Observer.trigger(Observer.events.notification, { type: 'success', message: "" }) }


    getItems = () => {
        let selectedCategoryOne = document.getElementById("selectedCategory").value.toString().toLowerCase()
        
        Requester.get('appdata', selectedCategoryOne, 'kinvey')
            .then(res => {
                this.setState({ items: res })
            })
            .catch(err => {
                let message = err.statusText;
                if (message === 'Unauthorized') {
                    message = 'Please login!'
                }
                Observer.trigger(Observer.events.notification, { type: 'error', message: message })
            })
    }

    selectCategory = ()=>{
        if (this.refs.selectedCategory.value !== 'Select category' || this.refs.selectedCategory.value !== ''){
            this.setState({ selectedCategory: this.refs.selectedCategory.value})
        }

        let op = document.getElementById("selectedCategory").getElementsByTagName("option");
        op[0].disabled = true

        this.getItems();
    }

    render = ()=>(
        <div className="viewCatalog">
            <select id="selectedCategory" ref="selectedCategory" value={this.state.selectedCategory}
                onChange={(e) => this.selectCategory()}>
                    {this.state.categories.map((c, index)=>{return <option key={index}>{c.categoryTitle}</option>})}
            </select>
            <div className="viewItems">
                {this.state.items.map(p=><Item key={p._id} {...p}/>)}
            </div>
        </div>
    )
}