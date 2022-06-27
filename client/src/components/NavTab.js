import React from 'react';
import { motion } from 'framer-motion';

function NavTab(props) {
    
    return (
        <motion.div 
            key={props.id}
            className='nav-link'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ ease: 'easeInOut', delay: props.id * 0.05 }}
        >
            <h1 className='nav-text'>{props.value}</h1>
        </motion.div>
    )
}

export default NavTab;