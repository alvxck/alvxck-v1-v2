import React from "react";

function AboutCard(props) {

    return (
        <div className='work-card-container'>
            <div className='work-card-header'>
                <div className='work-header-info'>
                    <h1>{props.company}</h1>
                    <h2>{props.location}</h2>
                </div>
                <div className='work-header-info'>
                    <h3>{props.position}</h3>
                    <h3>{props.date}</h3>
                </div>  
            </div>

            <div className='work-card-content'>
                <ul>
                    <li>{props.info1}</li>
                    <li>{props.info2}</li>
                    <li>{props.info3}</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutCard;