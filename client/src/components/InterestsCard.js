import React from 'react';


function InterestsCard(props) {
    return (
        <div className='interests-content-image'>
            <img src={props.img} />
            <div className='interests-content-info'>
                <h1>{props.caption}</h1>
                <ul>
                    <li>{props.info}</li>
                </ul>
            </div>
        </div>
    )
}

export default InterestsCard;