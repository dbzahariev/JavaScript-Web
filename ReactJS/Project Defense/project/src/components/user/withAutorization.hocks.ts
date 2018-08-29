import React, {Component} from 'c:/Users/Ramsess/Downloads/js-web/JavaScript-Web/ReactJS/Project Defense/project/node_modules/@types/react/index'
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

        /*render = () => {
            let userHasAccess = this.state.roles.indexOf(role) !== -1
            if (userHasAccess) {
                return `<Component {...this.props}`
            } else {
                return `<h1>Unautorized<h1>`
            }
        }   
        */
       render = () => {
           return `<h1>hi</h1>`
       } 
    }
}



export default () => (
    `<div className="about welcome">
        <h1>Welcome to our shop</h1>`
)
// export default function withAdminAuthorizazition(Component) {
//     return withAtuhorization(Component, 'Admin')
// }
