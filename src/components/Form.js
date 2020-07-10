import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: ''
        }
    }

    handleUsername =(event)=> {
        this.setState(
            {
                username : event.target.value
            }
        )
    }

    handleComments=(event) => {
        this.setState({
            comments : event.target.value
        })
    }
    

    render() {
        return (
            <form>
            <div>
                <label>UserName </label>
                <input type='text' value={this.state.username} onChange={this.handleUsername}></input>
            </div>
            <br></br>
            <div>
                <label>Comments </label>
                <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
            </div>
            </form>
        )
    }
}

export default Form
