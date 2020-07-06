import React from 'react'
import Names from './Names'

function NameList() {
    const names=['Vatsal', 'ABCD','XYZ']
    const nameList=names.map(name => (<Names name={name}></Names>))
    return (
        <div>
            {
                nameList
            }
            
        </div>
    )
}

export default NameList
