import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
    return (
        <motion.div
            className='article-container'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw'}}
            transition={{ ease: 'easeInOut', duration: .4 }}  
        >
            <h1>projects</h1>
        </motion.div>
    )
}

export default Projects;