import React from 'react';
import { motion } from 'framer-motion';
import AboutCard from './AboutCard';
import experience from '../../assets/experience-data';

function About() {
    return (
        <motion.div
            className='about-container'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw'}}
            transition={{ ease: 'easeInOut', duration: .4 }}  
        >
            <div className='about-top'>
                <img src='https://media.wired.com/photos/5ed67e71b818b223fd84195f/1:1/w_1600,h_1600,c_limit/Blackout-hashtag-activism.jpg' alt='headshot'/>
                <div className='about-top-information'>
                    <div>
                        <h1>Hi! I'm Alex,</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
                    </div>
                    <div>
                        <h1>Skills</h1>
                        <ul>
                            <li>Data: Python, SQL</li>
                            <li>Web: Javascript, React, Node, Express, MongoDB, HTML, CSS</li>
                            <li>Technologies: Git / Github</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1>Work Experience</h1>
            <div className='about-bottom'>
                {experience.map((work) => (
                    <AboutCard
                        key={work.company}
                        company={work.company}
                        position={work.position}
                        location={work.location}
                        time={work.time}
                        info1={work.info1}
                        info2={work.info2}
                        info3={work.info3}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default About;