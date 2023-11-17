import React, {Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'welcome all'
        }
    }
    changeMessage(){
        this.setState({
            message:'cheers'
        })
    }

    render(){
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>click</button>
            </div>
        )
    }
}

export default Message;