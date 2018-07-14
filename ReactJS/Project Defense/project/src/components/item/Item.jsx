import React, { Component } from 'react'

export default class Catalog extends Component {
    render = () => {
        return (
            <article className="item">
                <div className='element'>
                    <span className="name">Name: {this.props.title}</span>
                    <br />
                    <span className="price">Price: {this.props.price}</span>
                </div>                
            </article>

        )
    }
}