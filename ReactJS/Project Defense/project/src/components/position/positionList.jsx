import React, { Component } from 'react'
import Requester from '../../infrastructures/Requester'
// import Item from './Item'
// import '../../style/post.css'
import Observer from '../../infrastructures/Observer';
// import {
//     BootstrapTable,
//     TableHeaderColumn
// } from 'react-bootstrap-table';

export default class Catalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            positions: [],
            users: [],
            selectedPosition: '',
        }
    }

    getPosition = () => {
        Requester.get('appdata', 'position', 'kinvey')
            .then(res => {
                res.unshift({ name: 'Select position' })
                this.setState({ positions: res })
            })
            .catch(err => {
                let message = err.statusText;
                if (message === 'Unauthorized') {
                    message = 'Please login!'
                }
                Observer.trigger(Observer.events.notification, { type: 'error', message: message })
            })
    }

    getUsers = () => {
        Requester.get('user', '', 'Kinvey')
            .then(res => {
                this.setState({ users: res })
            })
            .catch(err => {
                let message = err.statusText;
                if (message === 'Unauthorized') {
                    message = 'Please login!'
                }
                Observer.trigger(Observer.events.notification, { type: 'error', message: message })
            })
    }


    componentDidMount = () => {
        this.getPosition()
        Observer.trigger(Observer.events.notification, { type: 'success', message: "" })
    }

    getPositionById(idOrName, isID = true) {
        let allPositions = this.state.positions
        if (allPositions !== []) {
            for (let i = 0; i <= allPositions.length; i++) {
                let position = allPositions[i]
                if (position !== undefined) {
                    if (isID === true && position._id === idOrName)
                        return position
                    else if (isID === false && position.name === idOrName) {
                        return position
                    }
                }
            }
        }
        return undefined
    }


    getTableContent = () => {
        let arr = this.state.users

        // Delete element if position is not selected position
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i]) {
                let position = this.getPositionById(this.state.selectedPosition, false)
                if (position && arr[i].position !== position._id) {
                    arr.splice(i, 1)
                    i = -1
                }
            }
        }


        if (arr.length > 0) {
            for (let i = 0; i <= arr.length; i++) {
                if (arr[i]) {
                    let position = this.getPositionById(arr[i].position)
                    if (position) {
                        arr[i].position = position.name
                    }
                }
            }



            let arrkk = {}
            for (let i = 0; i <= arr.length; i++) {
                if (arr[i] !== undefined) {
                    arrkk[arr[i]._id] = {
                        position: arr[i].position,
                        name: arr[i].username
                    }
                }
            }
            arr = arrkk

            return (
                <div>
                    <table>
                        <thead>
                            <tr>{["id", "name", "Position", "button"].map((h) => <th key={h}>{h}</th>)}</tr>
                        </thead>
                        <tbody>
                            {Object.keys(arr).map((k) => {
                                let data = arr[k];
                                return (
                                    <tr key={k}>
                                        <td>{k}</td>
                                        <td>{data.name}</td>
                                        <td>{data.position}</td>
                                        <td><button onClick={(e) => this.hendleDelete(k, data.name, data.position)}>delete</button></td>
                                        {/* <td>{data.c}</td> */}
                                        {/* <td>{data.d}</td> */}
                                        {/* <td>{data.e}</td> */}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            );
        }
    };

    hendleDelete = (data1, data2, data3) => {
        // ev.preventDefault();
        // console.log(kk)
        // console.log(ev.target)
        // console.log(this)
        console.log(data1)
        console.log(data2)
        console.log(data3)
        // let fieldName = ev.target.name
        // let fieldValue = ev.target.value

        // this.setState({ [fieldName]: fieldValue })
    }


    selectPosition = () => {
        if (this.refs.selectedPosition.value !== 'Select position' || this.refs.selectedPosition.value !== '') {
            this.setState({ selectedPosition: this.refs.selectedPosition.value })
        }
        document.getElementById("selectedPosition").getElementsByTagName("option")[0].disabled = true;

        this.getUsers();
    }




    render = () => (
        <div className="viewCatalog">
            <select id="selectedPosition" ref="selectedPosition" value={this.state.selectedPosition}
                onChange={(e) => this.selectPosition()}>
                {this.state.positions.map((c, index) => { return <option key={index}>{c.name}</option> })}
            </select>
            <div>{this.getTableContent()}</div>
            {/* <div className="viewItems">
                {this.state.items.map(p => <Item key={p._id} {...p} />)}
            </div> */}
        </div>
    )
}