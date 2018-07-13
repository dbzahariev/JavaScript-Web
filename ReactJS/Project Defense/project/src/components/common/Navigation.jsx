import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../../style/menu.css'

export default class Catalog extends Component {
    render = () => {
        return (
            <div id="menu">
                <div className="title">Navigation</div>
                <NavLink className="nav" to='/'>Home</NavLink>
                {/* <NavLink className="nav" to='/catalog'>Catalog</NavLink> */}
                {/* <NavLink className="nav" to='/postCreate'>Create Post</NavLink> */}
                {/* <NavLink className="nav" to='/linkMyPosts'>My Posts</NavLink> */}
                <NavLink className="nav" to='/about'>About</NavLink>
            </div>
        )
    }
}