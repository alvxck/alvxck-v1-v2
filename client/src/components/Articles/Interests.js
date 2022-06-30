import React from 'react';
import { motion } from 'framer-motion';

function Interests() {
    return (
        <motion.div
            className='article-container'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw'}}
            transition={{ ease: 'easeInOut', duration: .4 }}  
        >
            <h1>interests</h1>
        </motion.div>
    )
}

export default Interests;