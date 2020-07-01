import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h3>Hello JSX</h3>
    //     </div>
    // )

    return React.createElement('div',{id: 'hello' , className: 'dummyClass'},
    React.createElement('h1',null,'Hello without JSX'))
}

export default Hello