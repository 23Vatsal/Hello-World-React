import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Vatsal'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(state,props){

        console.log('LifecycleB getDerivedStateFromProps')
        return null;
    }
    
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return (

            <div>
               LifecycleB
            </div>
        )
    }
}

export default LifecycleB
