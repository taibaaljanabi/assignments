import React from 'react'


function ColorBox(props){
    const styles = {

        backgroundColor : props.background
    }
    return (
        <div  style={styles} >
        <h3>Tilte : {props.title} </h3>
        <p>Subtitle: {props.subtitle}</p>
        <p> Info : {props.info}</p>
       

        </div>
    )
}

export default Color