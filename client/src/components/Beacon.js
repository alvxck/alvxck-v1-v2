import React from 'react';
import { motion } from 'framer-motion';

function Beacon(props) {

    return (
        <div 
            className='beacon'
            style={{ top: props.top, left: props.left}}
        >
            <div className='beacon-link' onClick={props.onClick}>
                <div className='beacon-value'>
                    {props.svg}
                    <h1>{props.value}</h1>
                </div>
            </div>
            {/* <motion.div 
                className='beacon-link'
                initial={{ opacity: 1, scale: 0 }}
                animate={{ opacity: 0, scale: 4 }}
                transition={{ duration: 4, repeat: Infinity }}  
                onClick={props.onClick}
            >
            </motion.div>  */}
        </div>
    )
}

export default Beacon;