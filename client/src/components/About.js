import React from "react";


function About(props) {

    return (
        <div className={props.selected === 'About' ? 'tab-selected' : 'tab-hidden'}>

        </div>
    )
}

export default About;