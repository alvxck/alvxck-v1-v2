import React from "react";
import ProjectsCard from "./ProjectsCard";
import data from "./data";


function Projects(props) {
    const dataProjects = data[2]['projects'];

    return (
        <div className={props.selected === 'Projects' ? 'tab-selected' : 'tab-hidden'}>
            <div className='projects'>
                {dataProjects.map((projects) => (
                    <ProjectsCard
                        key={projects.key}
                        name={projects.name}
                        area={projects.area}
                        codelink={projects.codelink}
                        viewlink={projects.viewlink}
                        img={projects.img}
                        tools={projects.tools}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;