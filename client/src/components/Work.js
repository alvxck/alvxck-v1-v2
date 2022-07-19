import React from 'react';
import WorkCard from './WorkCard';
import experience from '../data/experience-data';

function Work() {
    return (
        <div className='work-container'>
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
        </div>
    )
}

export default Work;