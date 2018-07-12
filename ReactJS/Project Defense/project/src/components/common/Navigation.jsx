import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../../style/menu.css'

export default class Catalog extends Component {
    render = () => {
        return (
            <div id="menu">
                <div className="title">Navigation</div>
                <NavLink className="nav" to='/' activeClassName='active'>Home</NavLink>
                <NavLink className="nav" to='/catalog' activeClassName='active'>Catalog</NavLink>
                <NavLink className="nav" to='/postCreate' activeClassName='active'>Create Post</NavLink>
                <NavLink className="nav" to='/linkMyPosts' activeClassName='active'>My Posts</NavLink>
                <NavLink className="nav" to='/about' activeClassName='active'>About</NavLink>
            </div>
        )
    }
}