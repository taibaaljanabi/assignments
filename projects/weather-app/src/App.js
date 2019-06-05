import React,{Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Form from './components/Form'
import Weather from './components/Weather'

import {withWeather} from './WeatherProvider'
import './App.css'
import NavBar from './components/Navbar'

import YourCities from './components/YourCities';


class App extends Component{
  constructor(){
    super()
      
    
  }
  


  render(){
    return (
      <div className="">
        <NavBar/>
        <Switch> 
          <Route exact path='/' component={ () => <Form handleSubmit={this.props.handleSubmit}/>} />
          <Route path ='/Weather' component = { ()=> <Weather  {...this.props}/>}/>
          <Route path = '/YourCities' component ={() => <YourCities {...this.props}/>}/>
        </Switch> 
      </div>
    )
  }
}

export default withRouter(withWeather(App))





