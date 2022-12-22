import React from "react";

function ProjectsCard(props) {

    return (
        <div className='project-card'>
            <div className='project-card-header'>

            </div>
            <div className='project-card-content'>
                {props.tools}
            </div>
        </div>
    )
}

export default ProjectsCard;