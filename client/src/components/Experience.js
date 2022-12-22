import React from "react";
import ExperienceCard from "./ExperienceCard";
import data from "./data";


function Experience(props) {
    const dataExperience = data[1]['experience'];
    return (
        <div className={props.selected === 'Experience' ? 'tab-selected' : 'tab-hidden'}>
            <div className='experience'>
                {dataExperience.map((experience) => (
                    <ExperienceCard
                        key={experience.key}
                        company={experience.company}
                        position={experience.position}
                        date={experience.date}
                        location={experience.location}
                        img={experience.img}
                        link={experience.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experience;