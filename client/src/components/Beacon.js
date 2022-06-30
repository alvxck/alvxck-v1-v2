import React from 'react';
import { motion } from 'framer-motion';

function Beacon(props) {

    return (
        <>
            <div className='beacon'></div>
            <motion.div 
                className='beacon'
                initial={{ opacity: 1, scale: 0 }}
                animate={{ opacity: 0, scale: 4 }}
                transition={{ duration: 7, repeat: Infinity }}  
            >
            </motion.div> 
        </>
            
    )
}

export default Beacon;