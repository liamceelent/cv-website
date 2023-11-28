import React, { Component } from 'react'

import ChildComp from './ChildComp';

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        parentName: 'parent'
      }
      this.greetparent = this.greetparent.bind(this)
    }
    greetparent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetparent}></ChildComp>
      </div>
    )
  }
}

export default ParentComp