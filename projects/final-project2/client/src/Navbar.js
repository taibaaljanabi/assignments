import React from 'react';
import { Link } from "react-router-dom";
import { withContext } from "./AppContext"
import Logo from './images/logo.png'


function Navbar(props) {
    return (
       
        
        <div className="navbar-wrapper">
       < Link to='/signup'>
        <img src={Logo} className='logo' alt='logo' />
        </Link>
        {/* <div className='signinSignup'> */}
        { 
            !props.token ?
            <React.Fragment>
            <div className="nav-link">
                <Link to="/signup" className='signup'>Sign Up</Link>
            </div>
            <div className="nav-link">
                <Link to="/login" className='login'>Log In</Link>
            </div>
            </React.Fragment>
            :
            <React.Fragment>
            <div className="nav-link">
                <Link to="/projects" className='projects'>Your projects</Link>
            </div>
            <div className="nav-link" className='logout'>
                <button onClick={() => props.logout()} className='logoutBtn'>Logout</button>

            </div>
            </React.Fragment>
        }
        {/* </div> */}
        </div>
       
    )
}

export default withContext(Navbar);