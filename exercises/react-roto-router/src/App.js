import React,{Component} from 'react'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Style from './Styles.css'
import {Switch,Route} from 'react-router-dom'

const App =()=>{
        return (
            <>
            <Navbar/>
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/services' component={Services}/>
                <Route path='/home'component={Home}/>
            </Switch>
            
            
            
            
            
            </>
        

        )
    }

export default App
