import React, { Component } from 'react'

export default class Catalog extends Component {
    render = () => {
        return (
            <article className="post">
                <div className='element'>
                    <h1>Name: {this.props.title} Price: {this.props.price}</h1>
                </div>                
            </article>

        )
    }
}