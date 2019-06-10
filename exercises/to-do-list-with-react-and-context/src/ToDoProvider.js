import React ,{Component} from 'react'


const {Provider, Consumer} = React.createContext()

class ToDoProvider extends Component{
    constructor(){
        super()
        this.state ={
            todos :[]
        }
    }
    getToDos = 

    render() {
        return (
            <Provider value={{
                ...this.state
            }}>
            {this.props.children}
            </Provider>
        )
    }
}
export default ToDoProvider

export function withToDos(Comp){
    return props => <Consumer>
                    {value => <Comp {...props} {... value}/>}
                   </Consumer>
}

