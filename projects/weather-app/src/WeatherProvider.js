import React,{Component} from 'react'
import Axios from 'axios'
import {withRouter} from 'react-router-dom'



const WeatherContext = React.createContext()

const Api_Key = 'a984fc36fcb1e9332f5a233c33e1cdfe'

class WeatherProvider extends Component{
    constructor(){
        super ()
        this.state={
            city:'',
            weathers: [],
            theme: '',
            description:'',
            temperature:'',
            humidity:'',
            windSpeed:'',
            flag: '',
            weathersBack:''
           
        }

        

    }

//   submit=()=>{
//     this.props.history.push('/Weather')
//   }


    changeTheme = ()=>{
        if(this.state.temperature < 25){
            this.setState({theme : 'cold'})
        }else {
            this.setState({theme: 'hot'})
        }
    }
    changeBackground=()=>{
        if (this.state.city === 'Baghdad'){
            this.setState({weatherBack : 'baghdad'})
        }else {
            this.setState({weatherBack : 'normal'})
        }

    }




    // changeWeather = (newWeather) => {
    //     this.setState(prevState=> ({
    //         weathers :[...prevState.weathers,newWeather]
    //     }))

    // }
    handleSubmit=(e)=>{
        e.preventDefault()
      
      
        const city = e.target.city.value
        const country = e.target.country.value
        
        Axios.get(`http://api.openweathermap.org/data/2.5/find?q=${city},${country}&units=metric&appid=${Api_Key}`).then(response => 
        {
        // console.log(response.data)
        const newWeather = {
            city : response.data.list[0].name,
            description : response.data.list[0].weather[0].description,
            temperature : response.data.list[0].main.temp,
            humidity : response.data.list[0].main.humidity,
            windSpeed : response.data.list[0].wind.speed

        }
        console.log(newWeather)
        this.setState((prevState)=>{
            return {
        city : newWeather.city,
        description : newWeather.description,
        temperature : newWeather.temperature,
        humidity : newWeather.humidity,
        windSpeed : newWeather.windSpeed,
        weathers:[...prevState.weathers,newWeather]
    
    }

        
        }, () => {
            this.changeTheme()
        },()=>{
            this.changeBackground()
        }
        
        )
      
        })
        Axios.get('https://restcountries.eu/rest/v2/capital/' + city) 
            .then(r => {
                console.log(r.data[0].flag)
                let flag = r.data[0].flag;
                this.setState({flag: flag})
            })
          this.props.history.push('/weather')
         
        
      }


    render(){
        return (
            <WeatherContext.Provider value={{
                ...this.state,
                // changeWeather: this.changeWeather,
                changeTheme :this.changeTheme,
                handleSubmit:this.handleSubmit,
                submit:this.submit,
                changeBackground: this.changeBackground



            }}>
             {this.props.children}
            </WeatherContext.Provider>
        ) 
    }


}
export default withRouter(WeatherProvider)
export const withWeather = C => props => (
    <WeatherContext.Consumer>
        {value => <C {...value} {...props}/>}
    </WeatherContext.Consumer>
)

