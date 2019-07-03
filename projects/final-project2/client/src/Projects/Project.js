import React from 'react';

function Project(props) {
    return (
        <div className="projectCard">
            <h3>{props.project.title}</h3>
            {/* <label>Completed:</label><input
                onChange={() => props.editProject(props.project._id, { completed: !props.project.completed })}
                type="checkbox"
                checked={props.project.completed}/> */}
                <h4 >Date: {props.project.date}</h4>
                <h4>{props.project.description}</h4>
            <button onClick={() => props.deleteProject(props.project._id)} className='projectBtn'>Delete Project</button>
        </div>
    )
}

export default Project;