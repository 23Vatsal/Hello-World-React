import React, { Component } from 'react'

class ClassClick extends Component {
    Handler(){
        console.log('Class Click enabled')
    }
    MOver(){
        console.log('Go over me')
    }
    render() {
        return (
            <div>
                <button onClick={this.Handler}>Class Click</button>
                <button onMouseOver={this.MOver}>Hover Over me</button>
            </div>
        )
    }
}

export default ClassClick
