import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1> welcome {this.props.name} is {this.props.size}</h1>
    }
}

export default Welcome;