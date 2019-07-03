import React, {Component} from 'react'
import {withContext} from '../AppContext'


class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            errorMessage:""
        }
    }


    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage:""

        })
    }
    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.clearInputs())
            .catch(err => {
                console.log(err.data)
                this.setState({errorMessage: "User already exist"})
            })
    }


    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit} className='form'>
                    <h3 className='welcoming'>Sign Up to start tracking your projects with this amazing app</h3>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="Username"/>
                        <br/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="Password"/>
                        <br/>
                    <button type="submit">Create Account</button>
                </form>
                {
                    this.state.errorMessage && 
                    <p style = {{color: "red"}}>{this.state.errorMessage}</p>
                }
            </div>
        )
    }

}

export default withContext(SignUp)