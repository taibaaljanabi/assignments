import React from 'react'
// import {Wave} from 'react-animated-text'
import Fade from 'react-reveal/Fade'
// import { url } from 'inspector';
import RPG from './images/RPG.png'
import weather from './images/weather.png'
import newBusiness from './images/newBusiness.png'
import group from './images/group.png'

// style={{backgroundImage:`url(${RPG})`, objectFit:'cover'}}


const Projects = () => {
    return(

        <div className='projects-container'>
                  
                  
                        {/* <Fade right delay={1100}> */}
                            <div className='project one'>
                                <div className='projectImg'style={{backgroundImage:`url(${RPG})`, backgroundSize:'cover'}} ></div>
                                <h4>console RPG</h4>
                            </div>
                        {/* </Fade> */} 
                        <div className='project two'>
                            <div className='projectImg' style={{backgroundImage:`url(${weather})`, backgroundSize:'cover'}}  ></div>
                            <h4>Weather App</h4>
                        </div>
                        <div className='project three'>
                            <div className='projectImg' style={{backgroundImage:`url(${newBusiness})`, backgroundSize:'cover'}}  ></div>
                            <h4>New Business</h4>
                        </div>
                        <div className='project four'>
                            <div className='projectImg' style={{backgroundImage:`url(${group})`, backgroundSize:'cover'}}  ></div>
                            <h4>Resturant Web Page(Group Project)</h4>
                        </div>


                   </div>


       
     
       
    )
}
export default Projects