import React, { Component } from 'react'

class WelcomeGreeting extends Component {
constructor(props) {
    super(props)

    this.state = {
         isLoggedIn: true
    }
}


    render() {
        //METHOD-3(Ternary Conditional Operator)
        return(
            this.state.isLoggedIn ?
            <div>Welcome Vatsal</div> :
            <div>Welcome Guest</div>
        )

        //METHOD-2
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome vatsal</div>
        // }
        // else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>


        //METHOD-1
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Vatsal</div>
        //     )   
        // }
        // else{
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        
    }
}

export default WelcomeGreeting
