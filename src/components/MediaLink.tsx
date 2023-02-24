
export const MediaLink = (props : any) => {

    return (
        <div className='medialink'>
            <a
                id={props.value}
                href={props.link}
                target='blank'
            >
                {props.svg}
            </a>
        </div>
    )
}
