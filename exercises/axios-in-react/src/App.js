import React,{Component} from 'react'
import Axios from 'axios'
import Navbar from './Navbar.js'
import Style from './Style.css'


class App extends Component{
    constructor(){
        super()

        this.state = {
            takeCare :[]
        }
    }





    componentDidMount(){
        Axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then((response)=>{
           
            this.setState({takeCare: response.data})
        })

    }
   
    render(){
        console.log(this.state)
        const mappedTakeCare = this.state.takeCare.map((takeC)=>{
            return(
                <div className='person'>
                <img  src={takeC.image} alt=""></img>
                <h4 className='text'>{takeC.name}</h4>

                </div>
            )
        })
        
        return(
            <div>
               <Navbar/>
               <div className='main'>
                {mappedTakeCare}
               </div>
            </div>
      
        ) 
        
    }
}

export default App