import React from 'react'
// import withWeather from './WeatherProvider'
const Form =(props)=>{
   
    return(
        <div className='des'>
        <h2 className='there'>"Sunshine is delicious, rain is refreshing, wind braces up, snow is exhilarating;there is no such thing as bad weather only different kinds of good weather"    Ruskin.</h2>
        <form onSubmit={props.handleSubmit}>
            <input className='input' type ='text' placeholder='Enter Your City' name='city'/>
            <br/>
            <input className='input' type = 'text'placeholder='Enter Your Country' name='country'/>
            <br/>
            <button className='btn'>Find Weather</button>
        </form>
        </div>
    )
}
export default Form