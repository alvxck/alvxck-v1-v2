import { ReactComponent as PythonSVG } from '../assets/python.svg';
import { ReactComponent as NumpySVG } from '../assets/numpy.svg';
import { ReactComponent as PytestSVG } from '../assets/pytest.svg';
import { ReactComponent as JavascriptSVG } from '../assets/javascript.svg';
import { ReactComponent as ReactSVG } from '../assets/react.svg';
import { ReactComponent as NodeSVG } from '../assets/nodejs.svg';
import { ReactComponent as ExpressSVG } from '../assets/expressjs.svg';
import { ReactComponent as MongoDBSVG } from '../assets/mongodb.svg';
import { ReactComponent as JestSVG } from '../assets/jest.svg';
import { ReactComponent as HTMLSVG } from '../assets/html.svg';
import { ReactComponent as CSSSVG } from '../assets/css.svg';
import { ReactComponent as GITSVG } from '../assets/git.svg';
import { ReactComponent as Aws } from '../assets/aws.svg';

import portfolio from '../assets/portfolio-preview.png';
import loginsystem from '../assets/loginsystem-preview.png';
import sha from '../assets/sha-preview.jpg'; 

const projects = [
    {
        key: 'project-portfolio-webpage',
        name: 'Portfolio Webpage',
        created: 'Front-End · June 2022',
        img: portfolio,
        languages: [
            <JavascriptSVG />, <ReactSVG />, <NodeSVG />, <HTMLSVG />, <CSSSVG />, <Aws />, <GITSVG />
        ],
        preview: 'https://alexandercarvalho.ca/',
        code: 'https://github.com/alvxck/alvxck',
        info: 'Personal portfolio and interactive webpage.',
    }, 
    {
        key: 'project-login-system',
        name: 'Login System',
        created: 'Full Stack · July 2022',
        img: loginsystem,
        languages: [
            <JavascriptSVG />, <ReactSVG />, <NodeSVG />, <ExpressSVG />, <MongoDBSVG />, <JestSVG />, <HTMLSVG />, <CSSSVG />, <GITSVG />
        ],
        preview: 'https://raw.githubusercontent.com/alvxck/Login-System/main/login-system-demo.gif',
        code: 'https://github.com/alvxck/Login-System',
        info: 'Full Stack [MERN] Login & Registration system with stateless User Authentication.',
    }, 
    {
        key: 'project-SHA',
        name: "Secure Hash Algorithm's",
        created: 'Data Analysis · March 2022',
        img: sha,
        languages: [
            <PythonSVG />, <NumpySVG />, <PytestSVG />, <GITSVG />
        ],
        preview: 'https://raw.githubusercontent.com/alvxck/SHA/main/sha-demo.gif',
        code: 'https://github.com/alvxck/SHA',
        info: 'Python implementation of SHA-1, SHA-2, and SHA-3 Cryptographic Hash Algorithms.',
    }, 
]

export default projects;