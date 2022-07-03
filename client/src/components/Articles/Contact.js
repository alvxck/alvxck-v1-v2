import React from 'react';
import { motion } from 'framer-motion';
import linkedin from '../../assets/linkedin.jpg';
import github from '../../assets/github.jpg';

function Contact() {
    return (
        <motion.div
            className='contact-container'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw'}}
            transition={{ ease: 'easeInOut', duration: .4 }}  
        >
            <div className='contact-row-top'>
                <a href='https://www.linkedin.com/in/-alexandercarvalho/' target="blank">
                    <img className='contact-img' src={linkedin} alt='linkedin'/>
                </a>
                <a href='https://github.com/alvxck' target="blank">
                    <img className='contact-img' src={github} alt='github'/>
                </a>
            </div>
            <div className='contact-row-bottom'>
                <h1 className='article-header'>Get in touch!</h1>
                <form className='contact-form' action='https://formsubmit.co/2a4f26a39876bbaec9b65254b6cc9b33' method='POST'>
                    <div className='contact-info'>
                        <input type='text' name='name' placeholder='Name *' required/>
                        <input type='text' name='email' placeholder='Email *' required/>
                        <input type='text' name='subject' placeholder='Subject'/>
                        <input className='contact-submit' type='submit' value='Send ↗︎'/>
                    </div>
                    <textarea name='message'/>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact;