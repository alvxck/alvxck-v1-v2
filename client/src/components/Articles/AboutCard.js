import React from "react";

function AboutCard(props) {

    return (
        <div className='about-card-container'>
            <h1>{props.company}</h1>
        </div>
    )
}

export default AboutCard;