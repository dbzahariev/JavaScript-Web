import React from 'react'

export default class ButtonWithClick extends React.Component{
    onButtonClicked(){
        alert('event')
    }

    render(){
        return(
            <button onClick={this.onButtonClicked}>Click me!</button>
        )
    }
}