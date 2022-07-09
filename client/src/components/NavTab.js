import React from 'react';
import { motion } from 'framer-motion';

function NavTab(props) {
    
    return (
        <motion.div 
            className={props.id === props.selected ? 'nav-link-selected' : 'nav-link'}
            onClick={props.onClick}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '-100vw' }}
            transition={{ ease: 'easeInOut', delay: props.id * 0.05 }}
        >
            <h1 className='nav-text'>
                {props.value}
            </h1>
            {props.svg}
        </motion.div>
    )
}

export default NavTab;