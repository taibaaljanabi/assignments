// import React, {Component} from 'react'

// class App extends Component {
//     constructor(){
//         super()
//         this.state ={
//             firstName: '',
//             lastName:'',
//             people:[]
            
//         }
//     }
//     handleChange =(event) =>{
//         this.setState ({
//             [event.target.name] : event.target.value

//         })
//     }
//     handleSubmit = (event)=> {
//         event.preventDefault()
//         const newPerson={
//             firstName : this.state.firstName,
//             lastName : this.state.lastName
//         }
//         this.setState((prevState) => {
//             return {
//                 people : [...prevState.people,newPerson]
//             }
//         })
//     } 
    


// render(){
    
//     const mappedPeople = this.state.people.map((person, i) =>
//     {
//         return (
//         <div key = {i + person.firstName}>
//             <h1>{person.firstName} {person.lastName}</h1>
//         </div>
//         )
        
//     }  )
//     return (
//         <>
//         <form onSubmit={this.handleSubmit}> 
        
//         <input 
//         type = 'text'
//         name = 'firstName'
//         placeholder = 'First Name'
//         onChange={this.state.handleChange}
//         />
//         <br/>
//         <input 
//         type = 'text'
//         name = 'lastName'
//         placeholder = 'Last Name'
//         onChange={this.state.handleChange}
//         />
//         <button>Submit</button>
//         </form> 
//         {mappedPeople}
//         </>
//         )     
       
//     }
    
// }

// export default App




import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state ={
            firstName:'',
            lastName:'',
            people:[]
        }
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault()

       const  newPerson = {
       
            firstName : this.state.firstName,
            lastName : this.state.lastName
       }
       
        this.setState((prevState)=>{
            return{
            people : [...prevState.people, newPerson]
            }
        })
        
    }
    
    render(){
        const mappedPeople = this.state.people.map((person,i)=>{
            return(
            <div key={i + person.firstName}>
                <h1>{this.state.firstName} {this.state.lastName}</h1>

            </div>
            )
        }
        )
       
        return(
            <>
            <form onSubmit = {this.handleSubmit}>
            <input 
            type = 'text' 
            name='firstName' 
            placeholder='First Name'
            onChange={this.handleChange}
            />
            <br/>
            <input 
            type = 'text' 
            name='lirstName' 
            placeholder='Last Name'
            onChange= {this.handleChange}
            />
            <br/>
            <button>Submit</button>

            </form>
            {mappedPeople}
           </> 
        )
    }

}


export default App

