import React from 'react'
import './Styles.css'
import Box from './Box'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            squares: ['white','white', 'white','white']
        }


    }


     blackOrWhite = () => {
         this.setState(
             prevState => {
                
                     if(prevState.squares[0] === 'black'){
                         return {
                            squares: ['white','white', 'white','white'] 
                         }
                        }else{
                             return {
                                squares: ['black','black', 'black','black']
                             }
                            }
                        }
                  )
                }   
            
    
     randomColor = () => {
         const colors = ['pink', 'red', 'blue', 'green', 'aquamarine', 'purple', 'yellow']
         const boxOne = colors[Math.floor(Math.random()*colors.length)]
         const boxTwo = colors[Math.floor(Math.random()*colors.length)]
         const boxThree = colors[Math.floor(Math.random()*colors.length)]
         const boxFour = colors[Math.floor(Math.random()*colors.length)]
         this.setState({
             squares: [boxOne,boxTwo,boxThree,boxFour]

         })

     }
     purpleC = () =>{
         this.setState(
             prevState => {
               if(prevState.squares[0]=== 'black') {
                   return {
                       squares: ["purple","purple","white","white"]
                   }
               } else{
                   return{
                       squares: ["purple", "purple","white","white"]
        
                   }
               }
             }
         )
     }
    





    render(){
        return(
            <>
            <div className = 'square-container'>
            <Box color = {this.state.squares[0]}/>
            <Box color = {this.state.squares[1]}/>
            <Box color = {this.state.squares[2]}/>
            <Box color = {this.state.squares[3]}/>
            </div>
            <button onClick = {this.blackOrWhite}>Click</button>
            <button onClick = {this.randomColor}>Click</button>
            <button onClick = {this.purpleC}>Click</button>
            <button>Click</button>

          </>
        )
    }
}



export default App