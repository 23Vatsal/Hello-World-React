import React, { Component } from 'react'

class ClassClick extends Component {
    Handler(){
        console.log('Class Click enabled')
    }
    render() {
        return (
            <div>
                <button onClick={this.Handler}>Class Click</button>
            </div>
        )
    }
}

export default ClassClick
