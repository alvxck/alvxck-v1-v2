import React from 'react';
import projects from '../data/project-data';
import ProjectCard from './ProjectCard';

function Projects(props) {
    return (
        <div className={props.selected ? 'projects-container-open' : 'projects-container-closed'}>

        </div>
    )
}

export default Projects;