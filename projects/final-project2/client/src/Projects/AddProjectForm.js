import React, { Component } from 'react';
import Axios from 'axios'
import {MdDone} from 'react-icons/md'
 


class AddProjectForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            date:"",
            language: '',
            dependencies: ''
            // selectedFile: null
        }
    }

    handleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            title: "",
            description:"",
            date:"",
            language: '',
            dependencies:''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProject(this.state)
            .then(response => {
                this.clearInputs()
            })
            .catch(err => console.error(err.response.data.message))
    }
    fileSelectedHandler = (e) => {
        this.setState({
        selectedFile : e.target.files[0]
    })

    }

    fileUploadHandler = (e) => {
   
        
    }       
    

    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit} className='addProjectForm'>
                <h3 className='AddProject'>Add New Project</h3>
                    <input
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Title"
                        className='projectInputs'/>
                        <input
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Add note"
                        className='projectInputs'
                        />
                         <input
                        name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Add date"
                        className='projectInputs'
                        />
                       <input 
                        name='language'
                        value={this.state.language}
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Add project language'
                        className='projectInputs'
                        />
                         <input 
                        name ='dependencies'
                        value={this.state.dependencies}
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Add project dependencies'
                        className='projectInputs'
                        />
                    <button className= 'projectBtn-edit'><MdDone/></button>


                </form>
            </div>
        )
    }
}

export default AddProjectForm;