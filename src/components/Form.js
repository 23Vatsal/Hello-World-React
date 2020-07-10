import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: ''
        }
    }

    handleChange =(event)=> {
        this.setState(
            {
                username : event.target.value
            }
        )
    }
    

    render() {
        return (
            <form>
            <div>
                <label>UserName</label>
                <input type='text' value={this.state.username} onChange={this.handleChange}></input>
            </div>
            </form>
        )
    }
}

export default Form
