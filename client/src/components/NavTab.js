import React from 'react';
import { motion } from 'framer-motion';

function NavTab(props) {
    
    return (
        <motion.div 
            className='nav-link'
            onClick={props.onClick}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '-100vw' }}
            transition={{ ease: 'easeInOut', delay: props.id * 0.05 }}
        >
            {props.svg}
            <h1 className='nav-text'>
                {props.value}
            </h1>
        </motion.div>
    )
}

export default NavTab;