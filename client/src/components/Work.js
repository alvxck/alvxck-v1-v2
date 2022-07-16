import React from 'react';
import { motion } from 'framer-motion';
import WorkCard from './WorkCard';
import experience from '../data/experience-data';

function Work() {
    return (
        <motion.div
            className='work-container'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw'}}
            transition={{ ease: 'easeInOut', duration: .4 }}  
        >
            <div className='work-experience-container'>
                {experience.map((work) => (
                    <WorkCard
                        key={work.company}
                        company={work.company}
                        position={work.position}
                        location={work.location}
                        date={work.date}
                        img={work.img}
                        info1={work.info1}
                        info2={work.info2}
                        info3={work.info3}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default Work;