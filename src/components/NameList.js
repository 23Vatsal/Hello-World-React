import React from 'react'
import Names from './Names'

function NameList() {
    const names=['Vatsal','Bruce','Kent']
    
const nameList=names.map((name,index) => <h2 key={index}>{name}</h2>)
    return (
        <div>
            {
                nameList
            }
            
        </div>
    )
}

export default NameList
