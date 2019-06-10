import React ,{Component} from 'react'
import Axios from 'axios'
import Style from './Style.css'


class App extends Component{
    constructor(){
        super()
        this.state={
            randomColor:[]
        }
    }


    componentDidMount(){
        Axios.get('http://www.colr.org/json/colors/random/7').then((response)=>{
            this.setState({randomColor: response.data})
        })
    }
    render(){
        const mappedRandom = this.state.randomColor.map((color)=>{
            return (
                <div className ='randomColor'>
                
                <h1>Random Colors</h1>
                </div>
            )
        })
    }
}