import React, {Component} from 'react'
import Home from './Home.js'
import About from './About.js'
import Footer from './Footer'
import Navbar from './Navbar'
import Styles from './Styles.css'
import {BrowserRouter , Route} from 'react-router-dom'


class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className = 'App'>
            <Navbar/>
            <Route  exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Footer/>
            
            </div>
            </BrowserRouter>

        )
    }
}




export default App
