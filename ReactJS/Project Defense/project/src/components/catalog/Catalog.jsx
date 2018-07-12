import React, {Component} from 'react'
import Navigation from '../common/Navigation'
import PostList from '../post/PostsList'

export default class Catalog extends Component{
    render = ()=>{
        return (
            <div>
                <Navigation />
                <PostList />
            </div>
        )
    }
}