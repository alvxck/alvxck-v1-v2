import React from 'react';
import { motion } from 'framer-motion';
import projects from '../../data/project-data';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <motion.div
            className='projects-container'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw'}}
            transition={{ ease: 'easeInOut', duration: .4 }}  
        >
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
        </motion.div>
    )
}

export default Projects;