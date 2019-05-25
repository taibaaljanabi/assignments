import React, {Component,createContext} from 'react'
// import { withTheme } from '../../../../../Downloads/src 11/ThemeProvider';
const {Consumer, Provider} = createContext()



class ThemeProvider extends Component{
    
    constructor(){
        super()
        this.state = {  //our global state
            light:true

        }
    }
    toggle = ()=>{
        this.setState(prevState=>{
            return {
                light : !prevState.light
            }
        })
    }








    render(){
        return(
            <Provider value={{
                ...this.state,
                toggle:this.toggle
            }}>{this.props.children}</Provider>
        )
    }
}
export default ThemeProvider

export function withTheme (Comp){
    return props => <Consumer>
                     {value => <Comp {...value} {...props}/>}
                    </Consumer>
}