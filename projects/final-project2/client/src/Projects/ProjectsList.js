import React from 'react';
import Project from "./Project";
import AddProjectForm from "./AddProjectForm"
import { withContext } from "../AppContext";

function ProjectsList(props) {
    const projects = props.projects.map(project => {
        return (
           
            <Project
                key={project._id}
                project={project}
                editProject={props.editProject}
                deleteProject={props.deleteProject}
            />
           
        )
    })

    return (
        
        <main>
            <AddProjectForm addProject={props.addProject} />
            <div className='projectsList'>
            {projects}
            </div>
        </main>
       
    )
}

export default withContext(ProjectsList);