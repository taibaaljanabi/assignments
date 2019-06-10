import React from 'react'
import SpotsContainer from './SpotsContainer'

function Spot(props){
    console.log(props)
let place = props.place
let price = props.price
let timeToGo = props.timeToGo

const styles = {
   backgroundColor: "pink",
  


}

    return(
        <div style = {styles} >
            <h1>{place}</h1>
            <h3>{price}</h3>
            <h3>{timeToGo}</h3>

        </div>
    )
}
export default Spot