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
            <div className='skills-content' >
                <div className='skills-content-programming'>
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
                            <p>Hooks</p>
                        </div>
                    </div>

                    <div className='skills-content-data'>
                        <h1>DevOps</h1>
                        <h2>Tools</h2>
                        <div className='skills-content-languages'>
                            <GITSVG />
                            <GithubSVG />
                            <Aws />
                        </div>              
                     </div>
                </div>
    
                <div className='skills-content-footer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"/>
                    </svg>
                    <h1>Programming</h1>
                </div>
            </div>

            <div className='skills-content' >
                <div className='skills-content-interpersonal'>
    


                </div>

                <div className='skills-content-footer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"/>
                    </svg>
                    <h1>Interpersonal</h1>
                </div>
            </div>
        </div>
    )
}

export default Skills;