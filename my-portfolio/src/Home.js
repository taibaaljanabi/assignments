import React from 'react'
// import myphoto from '../pictures/photoslibrary/masters/2019/06/06/myphoto/myphoto
import Fade from 'react-reveal/Fade'
// import Projects from './Projects'
// import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'



const Home = () => {
    return(
        <div className='home'>
        {/* <img scr='myphoto'/> */}
            <div className='welcome' >
                <Fade left >
                <h3>Welcome to my portfolio</h3>
                </Fade>
                <h6>My name is Taiba Aljanabi, I am a Full Stack Web Developer.<br/>I have a big passion for coding because i wanted to learn the language<br/> of the futhure.</h6>
            </div>
            <br/>
            {/* <Link className = 'linkToProjects' to ='./Projects'>Check Out My Projects ;)</Link> */}
            <div className='icons'>
            <a href=''className='linkedIn'
            className='icon'><FontAwesomeIcon icon={faLinkedin} size='6x'/>
            </a>
            <a href='https://github.com/taibaaljanabi'className='github' className='icon'><FontAwesomeIcon icon={faGithub} size='6x'/>
            </a>

            </div>
         
        
      </div>
    )
}
export default Home