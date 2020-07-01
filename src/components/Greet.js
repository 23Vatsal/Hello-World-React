import React from 'react'

// function greet(){
//     return <h1>Hello Vatsal!</h1>
// }

export const Greet = (props) => 
{
    console.log(props);
    return (
        <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        {props.children}
        </div>

    )
}

