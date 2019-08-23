import React from 'react';

function Project(props) {
    return (
        <div className="projectCard">
            <h4>{props.project.title}</h4>
            {/* <label>Completed:</label><input
                onChange={() => props.editProject(props.project._id, { completed: !props.project.completed })}
                type="checkbox"
                checked={props.project.completed}/> */}
                <h5 >Date: {props.project.date}</h5>
                <h5>{props.project.description}</h5>
                <h5>{props.project.language}</h5>
                <h5>{props.project.dependencies}</h5>
            <button onClick={() => props.deleteProject(props.project._id)} className='projectBtn'>Delete Project</button>
        </div>
    )
}

export default Project;