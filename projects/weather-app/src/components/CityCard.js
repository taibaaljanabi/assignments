import React from 'react'


const CityCard = (props) => {
return(
    <div className='card'>
    <div className={props.theme}>
            <h3 className='city'>City: {props.city}</h3>
            <br/>
            <h3>Description: {props.description}</h3>
            <br/>
            <h3>Temperature: {props.temperature} C</h3>
            <br/>
            <h3>Humidity: {props.humidity}</h3>
            <br/>
            <h3>Wind Speed: {props.windSpeed}</h3>
        </div>
        </div>
)



}
export default CityCard


// description = {weather.description}
//  temperature = {weather.temperature}
//  windSpeed = {weather.windSpeed}