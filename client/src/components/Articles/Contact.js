import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <motion.div
            className='contact-container'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw'}}
            transition={{ ease: 'easeInOut', duration: .4 }}  
        >
            <div className='contact-info'>

            </div>

            <div className='contact-info'>

            </div>
            
        </motion.div>
    )
}

export default Contact;