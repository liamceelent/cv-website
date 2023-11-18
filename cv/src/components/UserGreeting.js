import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: false
      }

      this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(){
        if (this.state.isLoggedIn){
            this.setState({
                isLoggedIn: false
            })
        } else {
            this.setState({
                isLoggedIn: true
            })
        }
    }

  render() {
    if (this.state.isLoggedIn) {
        return(
            <div>
                <button onClick={this.clickHandler}>dw</button>
                <div>welcome</div>
            </div>
        )
    } else {
        return ( 
            <div>
                <button onClick={this.clickHandler}>dw</button>
                <div>dick</div>
            </div>
        )
    }
    // return (
    //     <div>
    //     <div>welcome back</div>
    //     <div>welcoem guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting