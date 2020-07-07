import React from 'react'
import Names from './Names'

function NameList() {
    const names=[
        {
            id:1,
            'name': 'Vatsal'
        },
        {
            id:2,
            'name': 'XYZ'
        },
        {
            id:3,
            'name': 'ABCD'
        }
    ]
    const nameList=names.map(name => (<Names key={name.id} name={name}></Names>))
    return (
        <div>
            {
                nameList
            }
            
        </div>
    )
}

export default NameList
