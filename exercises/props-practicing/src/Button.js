import React from 'react'

const Button =(props)=>{
    const {increcement}=props
    return (
        <div>
            <button onClick={increcement}>Add</button>
        </div>
    )
}
export default Button