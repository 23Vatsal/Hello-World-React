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

    handleTopic=(event) => {
        this.setState({
            topic : event.target.value
        })
    }
    
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        //this is used to prevent data from being lost when page is reloaded
        event.preventDefault()

        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>UserName </label>
                <input type='text' value={this.state.username} onChange={this.handleUsername}></input>
            </div>
            <br></br>
            <div>
                <label>Comments </label>
                <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
            </div>
            <div>
                <label>Topic </label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
