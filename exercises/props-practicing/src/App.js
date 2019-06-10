import React,{Component} from 'react'
import Display from './Display'
import Button from './Button'


class App extends Component{
    constructor(){
        super()
        this.state={
            count : 0
        }
    }

    increcement =()=>{
        this.setState(prevState =>({
            count:prevState.count + 1
        }),() =>console.log(this.state.count)

        )
    }







    render (){
        return (
            <div>
                <Display count = {this.state.count}/>
                <Button increcement={this.increcement}/>
            </div>
        )
    }

}
export default App