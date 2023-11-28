import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
        comments: '',
        topic: 'react'
      }
    }

    handleUsername = (event) => {
        this.setState({username: event.target.value})
    }

    handleComments = (event) => {
        this.setState({comments: event.target.value})
    }
    handleTopic = (event) => {
        this.setState({topic: event.target.value})
    }
    handleSubmit = (event) => {
        alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>username</label>
                <input type = 'text' value = {this.state.username} onChange={this.handleUsername}/>
            </div>

            <div>
                <label> comments</label>
                <textarea value = {this.state.comments} onChange={this.handleComments}>

                </textarea>
            </div>
            <div>
                <label>topic</label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option value = 'react'>react</option>
                    <option value = 'tgh'>tgh</option>
                    <option value = 'ew'>ew</option>
                </select>
            </div>
            <button>submit</button>
        </form>
    )
  }
}

export default Form