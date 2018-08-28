import React, {Component} from 'react'
import requester from '../../infrastructures/Requester'

function withAtuhorization (Component, role){
    return class withAtuhorization extends Component {
        constructor(props){
            super(props);
            this.state = {
                roles: []
            }
        }

        componentDidMount = ()=>{
            let id = sessionStorage.getItem('userId')
            requester.get('user', id, 'kinvey')
                .then((data)=>console.log(data))
        }

        render = ()=>{
            let userHasAccess = this.state.roles.indexOf(role) !== -1
            if (userHasAccess) {
                return <Component {...this.props}
            } else {
                return <h1>Unautorized<h1>
            }
        }
    }
}