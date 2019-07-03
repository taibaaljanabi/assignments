import React, {Component} from 'react'
import {withContext} from '../AppContext'


class LoginForm extends Component{
    constructor(){
        super()
        this.state={
            username: "",
            password: "",
            errorMessage: ""

        }
    }

    handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
        [name] : value
    })

    }
    
    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })

    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.login(this.state)
        .then(() => this.clearInputs())
        .catch(err => {
            this.setState({errorMessage : 'either username or password is incorrect'})
        })

    }
    
    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit} className='form'>
                    <h3 className='welcoming'>Log In if you already have an account</h3>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username"/>
                        <br/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password"/>
                        <br/>
                    <button type="submit" >Submit</button>
                </form>
                {
                    this.state.errorMessage && 
                    <p style ={{color: "red"}}>{this.state.errorMessage}</p>
                }
            </div>
        )
    }

}

export default withContext(LoginForm)