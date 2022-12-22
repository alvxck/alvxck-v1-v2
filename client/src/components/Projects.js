import React from "react";


function Projects(props) {

    return (
        <div className={props.selected === 'Projects' ? 'tab-selected' : 'tab-hidden'}>
            <div className='projects'>

            </div>
        </div>
    )
}

export default Projects;