import React, { Component } from 'react'
import Requester from '../../infrastructures/Requester'
import '../../style/post.css'
import Observer from '../../infrastructures/Observer';
import Item from './Item'


export default class Catalog extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: [],
        }
    }

    getCategory = () => {
        Requester.get('appdata', 'category', 'kinvey')
            .then(res => {
                this.setState({ items: res })
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
        Observer.trigger(Observer.events.notification, { type: 'success', message: "" })
    }

    render = ()=>(
        <div className="viewCatalog">
            <div className="viewItems">
            <ul>
                {this.state.items.map(p => <Item key={p._id} {...p}/>)}
            </ul>
            </div>
        </div>
    )
}