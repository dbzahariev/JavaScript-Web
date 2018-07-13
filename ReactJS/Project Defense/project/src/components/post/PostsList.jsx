import React, { Component } from 'react'
import Requester from '../../infrastructures/Requester'
// import Post from './Post'
import '../../style/post.css'

export default class Catalog extends Component {
    constructor(props){
        super(props)
        this.state = { posts: [], selectedCategory: '' }
    }

    getPosts = () => {
        Requester.get('appdata', 'category', 'kinvey')
            .then(res => {
                res.unshift({title: 'Select category'})
                this.setState({ posts: res })
            })
    }

    componentDidMount = ()=> this.getPosts()

    selectCategory = ()=>{
        this.setState.selectedCategory = this.refs.category.value
        console.log(this.state.selectedCategory)
        
    }

    render = ()=>(
        <div className="viewCatalog">
            <select ref="category" onChange={(e)=> this.selectCategory()}>{this.state.posts.map((p, index)=>{return <option key={index}>{p.title}</option>})}</select>
        </div>
    )
}