import React from "react";


function MediaLink(props) {

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

export default MediaLink;