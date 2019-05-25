import React from 'react'
import {withTheme} from './ThemeProvider'
import Main from './Main'
import Footer from './Footer'
import Navbar from './Navbar'
import Styles from './Styles.css'


const App = (props)=>{
    return (
        <>
        <Navbar/>
        <div className = {props.light ? 'light':'dark'}>
        <button onClick = {props.toggle}>{props.light ? 'Night' : 'Morning'}</button>
   
        </div>
        <Footer/>
        </>
    )
}
export default withTheme(App)