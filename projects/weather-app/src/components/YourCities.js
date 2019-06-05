import React from 'react'
import {withWeather} from '../WeatherProvider'
import CityCard from './CityCard';



const YourCities=(props)=>{

    // componentDidMount(){
    //     this.props.handleSubmit()
    // }
    console.log(props.weathers)
    const mappedWeather =props.weathers.map((weather) =>
         <CityCard
         city = {weather.city}
         description = {weather.description}
         temperature = {weather.temperature}
         humidity = {weather.humidity}
         windSpeed = {weather.windSpeed}
          />)

    
        console.log(props)
        // const mappedWeather =props.weathers.map((weather) =>
        //  <yourCities 
        //  city = {weather.city}
        //  description = {weather.description}
        //  temperature = {weather.temperature}
        //  windSpeed = {weather.windSpeed}
        //   />)
        return (
            <div className='container'>
            {mappedWeather}
            
            </div>
        )
    


}
export default withWeather(YourCities)
