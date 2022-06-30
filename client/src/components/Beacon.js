import React from 'react';
import { motion } from 'framer-motion';

function Beacon(props) {

    return (
        <div 
            className='beacon-container'
            style={{ top: props.top, left: props.left}}
        >
            <div className='beacon' onClick={props.onClick}></div>
            <motion.div 
                className='beacon'
                initial={{ opacity: 1, scale: 0 }}
                animate={{ opacity: 0, scale: 4 }}
                transition={{ duration: 6, repeat: Infinity }}  
                onClick={props.onClick}
            >
            </motion.div> 
        </div>
            
    )
}

export default Beacon;