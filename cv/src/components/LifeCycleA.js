import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'john'
      }
      console.log('lifcycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('lifcycleA derived')
        return null
    }

    componentDidMount() {
        console.log('lifcycleA compenet')
    }

    shouldComponentUpdate(){
        console.log('lifcycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifcycleA getSnapshotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('lifcycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name:'tom'
        })
    }

  render() {
    console.log('lifcycleA render')
    return (
        <div>
            <div>lifeCyclesA </div>
            <button onClick={this.changeState}> hi </button>
            <LifeCycleB></LifeCycleB>
        </div>
    )
  }
}

export default LifeCycleA