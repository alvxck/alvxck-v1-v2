import React from "react";

function SkillCard(props) {

    return (
        <div className='skills-content-card'>
            <div className='skills-content-card-header'>
                {props.header_svg}
                <h1>{props.skill}</h1>
            </div>

            <div className='skills-content-card-info'>
                <h2>{props.header1}</h2>
                <div className='skills-content-card-info-languages'>
                    {props.svgs}
                </div>

                <h2>{props.header2}</h2>
                <div className='skills-content-card-info-concepts'>
                    {props.info}
                </div>
            </div>
        </div>
    )

}

export default SkillCard;