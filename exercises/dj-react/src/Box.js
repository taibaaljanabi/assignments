import React from 'react'

// function Box(){
//     return (
//         <div>
              
//         </div>
//     )

// }

const Box = props =>{
    return (
        <div className = 'box' style = {{background:props.color}}></div>
    )
}
export default Box