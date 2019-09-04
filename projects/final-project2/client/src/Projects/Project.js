import React from 'react';
import {MdEdit, MdDeleteSweep} from 'react-icons/md'


function Project(props) {
    return (
        <div className="projectCard">
            <h4>{props.project.title}</h4>
            {/* <label>Completed:</label><input
                onChange={() => props.editProject(props.project._id, { completed: !props.project.completed })}
                type="checkbox"
                checked={props.project.completed}/> */}
                <h5 ><h3 className='projectInput'>Date:</h3>  {props.project.date}</h5>
                <h5><h3 className='projectInput'>Description: </h3>  {props.project.description}</h5>
                <h5><h3 className='projectInput'>Programming Language:</h3>  {props.project.language}</h5>
                <h5> <h3 className='projectInput'>dependencies:</h3>  {props.project.dependencies}</h5>
                <div className='btns'>
            <button onClick={() => props.deleteProject(props.project._id)} className='projectBtn-delete'><MdDeleteSweep/></button><button onClick={() => props.editProject (props.project._id)} className= 'projectBtn-edit'><MdEdit/></button>
            </div>
        </div>
    )
}

export default Project;