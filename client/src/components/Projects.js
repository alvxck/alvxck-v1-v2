import React from 'react';
import projects from '../data/project-data';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <div className='projects-container'>
            {projects.map((project) => (
                <ProjectCard
                    key={project.name} 
                    title={project.name}
                    created={project.created}
                    image={project.img}
                    languages={project.languages}
                    preview={project.preview}
                    code={project.code}
                    info={project.info}
                />
            ))}
        </div>
    )
}

export default Projects;