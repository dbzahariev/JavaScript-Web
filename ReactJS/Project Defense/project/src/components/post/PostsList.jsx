import React, { Component } from 'react'
import Requester from '../../infrastructures/Requester'
import Post from './post/post'
import '../../style/post.css'

export default class Catalog extends Component {
    constructor(props){
        super(props)
        this.state = { posts: [] }
    }

    getPosts = () => {
        Requester.get('appdata', 'posts', 'kinvey')
            .then(res => {
                this.setState({posts: res})
            })}

    componentDidMount = ()=> this.getPosts()

    render = ()=>(
        <section id="viewCatalog">
            {this.state.posts.map((p, index) => <Post index={index} key={p._id} {...p} />)}
        </section>
    )
}