import React from 'react'



import {Link} from 'react-router-dom'

const NavBar = (props)=>{
    return (
        <div className='navBar'>
            <Link  className='link' to ='./'>Home</Link>
            <Link className='link' to ='./Weather'>Weather</Link>
            <Link className='link' to ='./YourCities'>Your Cities</Link>

        </div>
    )

}
export default NavBar