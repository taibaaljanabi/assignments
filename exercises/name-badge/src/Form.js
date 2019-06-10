import React,{Component} from 'react'
import Badge from './Badge.js'
import Styles from './Styles.css'

class Form extends Component {
    constructor(){
        super()
        this.state ={
            firstName :"",
            lastName: "",
            email: "",
            placeOfBirth:"",
            phone: 0,
            favFood: "",
            tellUs: "",
            badges:[]
        }

    }
    handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value

    })
    }
    handleSubmit= (event) => {
        event.preventDefault()
        const newP = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email :this.state.email,
            placeOfBirth : this.state.placeOfBirth,
            phone : this.state.phone,
            favFood : this.state.favFood,
            tellUs : this.state.tellUs

        }
    this.setState((prevState)=> {
        return(
            badges =[prevState.badges, newP]
        )
     })


    }
    // badge = () => {
    //     return(
    //     <div>
    //      {this.state.newP}
    //     </div>

    //     )

    // }



    render(){
        const mappedB = this.state.badges.map((badge)=>{
            return (
                <Badge/>
            )
        })

        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                placeholder="First Name"  
                name="firstName" 
                onChange={this.state.handleChange}
                
                className = "firstName"
                />
                <input 
                type="text" 
                placeholder="Last Name"  
                name="lastName" 
                onChange={this.state.handleChange}
                
                />
                <input 
                type="text" 
                placeholder="E-mail"  
                name="email" 
                onChange={this.state.handleChange}
               
                />
                <input 
                type="text" 
                placeholder="Place of Birth"  
                name="placeOfBirth" 
                onChange={this.state.handleChange}
                
                />
                <input 
                type="number" 
                placeholder="Phone"  
                name="phone" 
                onChange={this.state.handleChange}
               
                />
                <input 
                type="text" 
                placeholder="Favorit Food"  
                name="favFood" 
                onChange={this.state.handleChange}
                
                />
                <br/>
                <textarea 
                type="text" 
                placeholder="Tell us about yourself" 
                name="tellUs" 
                onChange={this.state.handleChange}
                className="tell"
                />
                <br/>
                <button>Submit</button>
           </form>
           {mappedB}
           </>
           
        )
      
    }

}

export default Form