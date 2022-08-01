import React from 'react';
import { ReactComponent as PythonSVG } from '../assets/python.svg';
import { ReactComponent as TensorFlowSVG } from '../assets/tensorflow.svg';
import { ReactComponent as SQLSVG } from '../assets/sql.svg';
import { ReactComponent as JavascriptSVG } from '../assets/javascript.svg';
import { ReactComponent as ReactSVG } from '../assets/react.svg';
import { ReactComponent as NodeSVG } from '../assets/nodejs.svg';
import { ReactComponent as ExpressSVG } from '../assets/expressjs.svg';
import { ReactComponent as MongoDBSVG } from '../assets/mongodb.svg';
import { ReactComponent as JestSVG } from '../assets/jest.svg';
import { ReactComponent as HTMLSVG } from '../assets/html.svg';
import { ReactComponent as CSSSVG } from '../assets/css.svg';
import { ReactComponent as GITSVG } from '../assets/git.svg';
import { ReactComponent as GithubSVG } from '../assets/github.svg';
import { ReactComponent as Aws } from '../assets/aws.svg';


function Skills(props) {
    return (
        <div className={props.selected ? 'skills-container-open' : 'skills-container-closed'}>
            <div className='skills-content'>
                <div className='skills-content-data'>
                    <h1>Data Science</h1>
                    <h2>Languages</h2>
                    <div className='skills-content-languages'>
                        <PythonSVG />
                        <TensorFlowSVG />
                        <SQLSVG />
                    </div>

                    <h2>Concepts</h2>
                    <div className='skills-content-concepts'>
                        <p>OOP</p>
                        <p>Unit Testing</p>
                        <p>RDBMS</p>
                        <p>Cryptography</p>
                    </div>
                </div>

                <div className='skills-content-data'>
                    <h1>Web Development</h1>
                    <h2>Languages</h2>
                    <div className='skills-content-languages'>
                        <JavascriptSVG />
                        <ReactSVG />
                        <NodeSVG />
                        <ExpressSVG />
                        <MongoDBSVG />
                        <JestSVG />
                        <HTMLSVG />
                        <CSSSVG />
                    </div>

                    <h2>Concepts</h2>
                    <div className='skills-content-concepts'>
                        <p>REST API's</p>
                        <p>Middleware</p>
                        <p>Stateless & Stateful Endpoints</p>
                        <p>DOM</p>
                        <p>Responsive Design</p>
                        <p>Unit / Integration / E2E Testing</p>
                        <p>Authentication</p>
                        <p>State Management</p>
                        <p>React Hooks</p>
                    </div>
                </div>
            </div>

            <div className='skills-content'>
                <div className='skills-content-data'>
                    <h1>DevOps</h1>
                    <h2>Tools</h2>
                    <div className='skills-content-languages'>
                        <GITSVG />
                        <GithubSVG />
                        <Aws />
                    </div>              
                </div>

                <div className='skills-content-data'>
                    <h1>Interpersonal</h1>
                    <h2>Traits</h2>
                    <div className='skills-content-concepts'>
                        <p>Punctual</p>
                        <p>Team Player</p>
                        <p>Detail Oriented</p>
                        <p>Reliable</p>
                        <p>Independant</p>
                        <p>Strong Communicator</p>
                        <p>Fast Learner</p>
                        <p>Adaptive</p>
                        <p>Leader</p>
                        <p>Hard Working</p>
                        <p>Self Aware</p>
                        <p>Honest</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;