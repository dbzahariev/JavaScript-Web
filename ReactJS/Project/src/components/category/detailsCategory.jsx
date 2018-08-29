import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import requester from '../../infrastructures/Requester'

export default class CategoryDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            title: '',
            imageUrl: '',
            url: '',
            description: '',
            author: '',
            createdOn: '',
            comments: []
        }
    }

    componentDidMount = () => {
        let postId = this.props.match.params.id;
        requester.get('appdata', 'category/' + postId, 'kinvey')
            .then(res => {
                this.setState({
                    title: res.title
                  });
                this.setState({
                    ...res
                })})                
            .catch(console.log);
    }

    render = () => {
        return (
            <article className="item">
                <div className='element'>
                    <span className="name">Name: {this.state.title}</span>
                    <div className="controls">
                        <ul>
                            <li className="action">
                                <Link to='/' className="editCategory">Edit</Link>
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