import React from 'react';
import { motion } from 'framer-motion';

function LoadingScreen() {
    return(
        <motion.div 
            className='loading-container'
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
            transition={{ delay: 2, duration: 2 }}
        >
            <motion.h1 
                className='loading-header'
                animate={{ opacity: [0, 1, 1], y: ['50%', '50%', '0%'] }}
                transition={{ duration: 2, times: [0, 0.5, 1]}}
            >
                Alexander Carvalho
            </motion.h1>
        </motion.div>
    )
}

export default LoadingScreen;