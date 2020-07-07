import React from 'react'

function Names({name,index}) {
    return (
        <div>
            <h2 key={index}>{name}</h2>
        </div>
    )
}

export default Names
