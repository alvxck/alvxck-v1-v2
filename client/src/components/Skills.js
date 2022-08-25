import React from 'react';
import skills from '../data/skills-data';
import SkillCard from './SkillCard';


function Skills(props) {
    return (
        <div className={props.selected ? 'skills-container-open' : 'skills-container-closed'}>
            <div className='skills-container'>
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.key}
                        skill={skill.skill}
                        header_svg={skill.header_svg}
                        header1={skill.header1}
                        svgs={skill.svgs}
                        header2={skill.header2}
                        info={skill.info}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills;