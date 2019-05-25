import React from 'react'
import {withTheme} from './ThemeProvider'
 

const Navbar = (props)=>{
    return(
        <div className ={props.light ? 'navBd': 'navBl'}>
        <a  className = {props.light? 'lightt' : 'darkt'} href=''>Home</a>
        <a className = {props.light? 'lightt' : 'darkt'}href=''>About</a>
        <a className = {props.light? 'lightt' : 'darkt'}href=''>Contact</a>
       
        </div>
    )
}
export default withTheme(Navbar)