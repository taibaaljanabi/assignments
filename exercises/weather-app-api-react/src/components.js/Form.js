import React  from 'react'


const Form =(props)=>{

        return (
           <form onSubmit = {props.getWeather}>
               <input type='text' placeholder='City...'/>
               <input type='text' placeholder='Country...'/>

               <button>Find Weather</button>
           </form>
        )
    }

export default Form 
