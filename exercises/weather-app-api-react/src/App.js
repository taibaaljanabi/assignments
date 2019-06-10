import React,{Component} from 'react'
import Form from './components.js/Form'
import WeatherDispaly from './components.js/WeatherDisplay'
import Axios from 'axios'


class App extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    getWeather=(e)=>{
        e.preventDefault()
        

        
        
    }
    render (){
        return (
            <div>
                <Form getWeather={this.getWeather}/>
                <WeatherDispaly/>
            </div>
        )
    }

}

export default App