import React from "react";

function ProjectsCard(props) {

    return (
        <div className='project-card'>
            <div className='project-card-header'>
                <h3>{props.name}</h3>
                <img
                    src={props.img}
                    alt={props.name}
                />
            </div>
            <div className='project-card-content'>
                {props.tools}
            </div>
        </div>
    )
}

export default ProjectsCard;