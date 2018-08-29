import {Component} from 'react'
import requester from '../../infrastructures/Requester';

export default class deleteCategory extends Component {
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

    logout = () => {
        let postId = this.props.match.params.id;
        requester.remove('appdata', `category/${postId}`, 'Kinvey').then(res=>{
            
            this.props.history.push('/categorys')
        }).catch(err=>{
            console.log(err)
        })
        
    }

    render = ()=> {
        this.logout()
        return null
    }
}