import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'john'
      }
      console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB derived')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB compenet')
    }

    shouldComponentUpdate(){
        console.log('lifcycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifcycleB getSnapshotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('lifcycleB componentDidUpdate')
    }

  render() {
    console.log('LifeCycleB render')
    return (
      <div>LifeCycleB </div>
    )
  }
}

export default LifeCycleB