import React from 'react';
import projects from '../data/project-data';
import ProjectCard from './ProjectCard';

function Projects(props) {
    return (
        <div className={props.selected ? 'projects-container-open' : 'projects-container-closed'}>
            <div className='projects-slider'>
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

            <div className='projects-slider-counter'>

            </div>
        </div>
    )
}

export default Projects;