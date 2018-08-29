import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Catalog extends Component {
    delete(ev){
        console.log(ev)
    }

    render = () => {
        return (
            <article className="item">
                <div className='element'>
                    <span className="name">Name: {this.props.title}</span>
                    <div className="controls">
                        <ul>
                            <li className="action">
                                <Link to={'/category/details/' + this.props._id}>Details</Link>
                            </li>
                            <li className="action">
                                <Link to={'/category/edit/' + this.props._id}>Edit</Link>
                            </li>
                            <li className="action">
                                <Link to={"/deleteCategory/"+this.props._id}>Delete</Link>
                            </li>
                        </ul>
                    </div>
                </div>                
            </article>
        )
    }
}