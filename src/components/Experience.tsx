import { ExperienceCard } from "./ExperienceCard";
import { data }  from "../utils/props-data";


export const Experience = (props : any) => {
    const dataExperience = data[1]['experience'];

    return (
        <div className={props.selected === 'Work' ? 'tab-selected' : 'tab-hidden'}>
            <div className='work'>
                {dataExperience?.map((experience) => (
                    <ExperienceCard
                        key={experience.key}
                        company={experience.company}
                        position={experience.position}
                        date={experience.date}
                        location={experience.location}
                        img={experience.img}
                        link={experience.link}
                        tools={experience.tools}
                    />
                ))}
                <a 
                    id='link'
                    href='https://docs.google.com/document/d/1A7UXFlswFa3kwT0bhSwc6gDfRE5hvBkIg1Xa8-H0xqE/export?format=pdf'
                    target='blank'
                >
                    Resume
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}
