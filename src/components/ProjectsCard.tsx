
export const ProjectsCard = (props  : any) => {

    return (
        <a
            id='work-link'
            href={props.link} 
            target='blank'
        >
            <div className='project-card'>
                <div className='project-card-header'>
                    <img
                        src={props.img}
                        alt={props.name}
                    />
                    <div className='project-card-header-info'>
                        <div className='project-card-header-info-title'>
                            <h1>{props.name}</h1>
                            <p>{props.type}</p>
                        </div>
                    </div>
                </div>
                <div className='project-card-content'>
                    {props.tools}
                </div>
            </div>
        </a>
    )
}
