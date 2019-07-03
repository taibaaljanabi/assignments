import React,{Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import NavBar from './NavBar'
import Projects from './Projects'
import MyResume from './MyResume'
import Home from './Home'
import Footer from './Footer'
import './App.css'


class App extends Component {
    // constructor(){
    //     super()
        
    // }



    render(){
        return(
            <div className='App'>
            <NavBar/>
            <Switch>
                <Route exact path ='/' component={Home}/>
                <Route path = '/Projects' component={Projects}/>
                <Route path = '/MyResume' component={MyResume}/>
            </Switch>
            <Footer/>
            
            
            
            </div>
        )
    }
       
}
export default App