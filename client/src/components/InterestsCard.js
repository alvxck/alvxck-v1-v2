import React from "react";


function InterestsCard(props) {

    return (
        <div className='interests-card'>
            <img src={props.img} alt='interest' />

            <div className='interests-card-info'>
                <h1>{props.name}</h1>
                <ul>
                    <li>{props.info}</li>
                </ul>
            </div>
        </div>
    )
}

export default InterestsCard;