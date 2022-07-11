import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as PythonSVG } from '../../assets/python.svg';
import { ReactComponent as TensorFlowSVG } from '../../assets/tensorflow.svg';
import { ReactComponent as SQLSVG } from '../../assets/sql.svg';
import { ReactComponent as JavascriptSVG } from '../../assets/javascript.svg';
import { ReactComponent as ReactSVG } from '../../assets/react.svg';
import { ReactComponent as NodeSVG } from '../../assets/nodejs.svg';
import { ReactComponent as ExpressSVG } from '../../assets/expressjs.svg';
import { ReactComponent as MongoDBSVG } from '../../assets/mongodb.svg';
import { ReactComponent as JestSVG } from '../../assets/jest.svg';
import { ReactComponent as HTMLSVG } from '../../assets/html.svg';
import { ReactComponent as CSSSVG } from '../../assets/css.svg';
import { ReactComponent as GITSVG } from '../../assets/git.svg';
import { ReactComponent as GithubSVG } from '../../assets/github.svg';


function About() {
    return (
        <motion.div
            className='about-container'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw'}}
            transition={{ ease: 'easeInOut', duration: .4 }}  
        >
            <img src='https://media.wired.com/photos/5ed67e71b818b223fd84195f/1:1/w_1600,h_1600,c_limit/Blackout-hashtag-activism.jpg' alt='headshot'/>
            <h1>Hi! I'm Alex,</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='about-information'>
                <div className='about-education'>
                    <div className='about-header'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"/>
                        </svg>
                        <h1>Education</h1>
                    </div>

                    <ul>
                        <li className='li-header'>Institution</li>
                        <li>Sheridan College</li>
                        <li className='li-header'>Degree</li>
                        <li>Honors Bachelor of Computer Science (Co-op)</li>
                        <li className='li-header'>GPA</li>
                        <li>3.88</li>
                        <li className='li-header'>Years</li>
                        <li>2021 - 2025</li>
                    </ul>
                </div>

                <div className='about-skills'>
                    <div className='about-header'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"/>
                        </svg>
                        <h1>Skills</h1>
                    </div>

                    <div className='skill-container'>
                        <PythonSVG />
                        <TensorFlowSVG />
                        <SQLSVG />
                        <JavascriptSVG />
                        <ReactSVG />
                        <NodeSVG />
                        <ExpressSVG />
                        <MongoDBSVG />
                        <JestSVG />
                        <HTMLSVG />
                        <CSSSVG />
                        <GITSVG />
                        <GithubSVG />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About;