import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () =>{
    return(
        <div className='NavBar'>
        <Link className = 'link' to ='./'>Home</Link>
        <Link className = 'link' to ='./Projects'>Projects</Link>
        <Link className = 'link' to ='./MyResume'>My Resume</Link>
        </div>
    )
}
export default NavBar