import React from 'react'
const Display = (props)=>{
    const {count} = props
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default Display