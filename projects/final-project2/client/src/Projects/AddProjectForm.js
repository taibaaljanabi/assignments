import React, { Component } from 'react';
import Axios from 'axios'
 


class AddProjectForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            date:""
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
            date:""
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
            <div>
                <form onSubmit={this.handleSubmit} className='addProjectForm'>
                    <h4>Add New Project</h4>

                    <input
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Title"/>
                        <input
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Add note"/>
                         <input
                        name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Add date"/>

                    <input
                       className='chooseFile' 
                       type='file'
                       onChange={this.fileSelectedHandler}
                       /> 
                     {/* <button onClick = {this.fileUploadHandler}>Upload</button>   */}
                     {/* <form action='/api/images' method="post" enctype="multipart/form-data">  <input type='file' name='image' /></form>  */}
                       

                    <button>Add Project</button>


                </form>
            </div>
        )
    }
}

export default AddProjectForm;