import React from 'react';
import projects from '../data/project-data';
import ProjectCard from './ProjectCard';

function Projects(props) {
    return (
        <div className={props.selected ? 'projects-container-open' : 'projects-container-closed'}>
            <div className='projects-content'>
                <svg 
					xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 256 512"
				>
					<path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/>
				</svg>
                
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

                <svg 
					xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 256 512"
				>
					<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
				</svg>
            </div>

            <div className='projects-slider-counter'>

            </div>
        </div>
    )
}

export default Projects;