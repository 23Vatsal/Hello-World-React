import React from 'react'
import './myStyles.css'

function StyleSheet(props) {
    const className= props.primary ? 'primary' : ''
    return (
        <div>
            <h2 className={`${className} font-xl` }>Style Sheet</h2>
        </div>
    )
}

export default StyleSheet
