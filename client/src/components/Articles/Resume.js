import React from 'react';
import { motion } from 'framer-motion';

function Resume() {
    return (
        <motion.div
            className='article-container-column'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw'}}
            transition={{ ease: 'easeInOut', duration: .4 }}  
        >
            <div className='article-column'>
                <h1 className='article-header'>Skills</h1>
            </div>
            <div className='article-column'>
                <h1 className='article-header'>Experience</h1>
            </div>

        </motion.div>
    )
}

export default Resume;