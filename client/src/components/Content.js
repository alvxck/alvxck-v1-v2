import React from "react";
import About from './About.js';
import Experience from './Experience.js';
import Projects from './Projects.js';

function Content(props) {

    return(
        <div className='content'>
            <About selected={props.selected}/>
            <Experience selected={props.selected}/>
            <Projects selected={props.selected}/>
        </div>
    )
}

export default Content;