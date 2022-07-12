import { ReactComponent as PythonSVG } from '../assets/python.svg';
import { ReactComponent as TensorFlowSVG } from '../assets/tensorflow.svg';
import { ReactComponent as JavascriptSVG } from '../assets/javascript.svg';
import { ReactComponent as ReactSVG } from '../assets/react.svg';
import { ReactComponent as NodeSVG } from '../assets/nodejs.svg';
import { ReactComponent as ExpressSVG } from '../assets/expressjs.svg';
import { ReactComponent as MongoDBSVG } from '../assets/mongodb.svg';
import { ReactComponent as JestSVG } from '../assets/jest.svg';
import { ReactComponent as HTMLSVG } from '../assets/html.svg';
import { ReactComponent as CSSSVG } from '../assets/css.svg';
import { ReactComponent as GITSVG } from '../assets/git.svg';

const projects = [
    {
        name: 'Portfolio Webpage',
        created: '6/26/22',
        img: 'https://media.wired.com/photos/5ed67e71b818b223fd84195f/1:1/w_1600,h_1600,c_limit/Blackout-hashtag-activism.jpg',
        languages: [
            <JavascriptSVG />, <ReactSVG />, <HTMLSVG />, <CSSSVG />, <GITSVG />
        ],
        preview: '',
        code: 'https://github.com/alvxck/alvxck',
        info: 'Personal portfolio webpage.',
    }, 
    {
        name: 'Authentication Service',
        created: '5/7/22',
        img: 'https://media.wired.com/photos/5ed67e71b818b223fd84195f/1:1/w_1600,h_1600,c_limit/Blackout-hashtag-activism.jpg',
        languages: [
            <JavascriptSVG />, <ReactSVG />, <NodeSVG />, <ExpressSVG />, <MongoDBSVG />, <JestSVG />, <HTMLSVG />, <CSSSVG />, <GITSVG />
        ],
        preview: 'https://raw.githubusercontent.com/alvxck/Login-System/main/login-system-demo.gif',
        code: 'https://github.com/alvxck/Login-System',
        info: 'Fullstack MERN login / registration system using REST API endpoints for login, registration, user authentication, and database connections.',
    }, 
    {
        name: 'Traffic Recognition System',
        created: 'TBD',
        img: 'https://media.wired.com/photos/5ed67e71b818b223fd84195f/1:1/w_1600,h_1600,c_limit/Blackout-hashtag-activism.jpg',
        languages: [
            <PythonSVG />, <TensorFlowSVG />, <GITSVG />
        ],
        preview: '',
        code: '',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
    {
        name: "Secure Hash Algorithm's",
        created: '3/20/22',
        img: 'https://media.wired.com/photos/5ed67e71b818b223fd84195f/1:1/w_1600,h_1600,c_limit/Blackout-hashtag-activism.jpg',
        languages: [
            <PythonSVG />, <GITSVG />
        ],
        preview: '',
        code: 'https://github.com/alvxck/SHA',
        info: 'Python implementation of all SHA-1, SHA-2, and SHA-3 cryptographic hash algorithms.',
    }, 
    {
        name: 'PDF Securitization',
        created: 'TBD',
        img: 'https://media.wired.com/photos/5ed67e71b818b223fd84195f/1:1/w_1600,h_1600,c_limit/Blackout-hashtag-activism.jpg',
        preview: '',
        code: '',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    }
]

export default projects;