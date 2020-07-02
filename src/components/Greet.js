import React from 'react'

// function greet(){
//     return <h1>Hello Vatsal!</h1>
// }

export const Greet = ({name,heroName}) => 
{
    return (
        <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
        </div>

    )
}

