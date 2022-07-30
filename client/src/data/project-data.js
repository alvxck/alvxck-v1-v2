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
import { ReactComponent as Aws } from '../assets/aws.svg';

import loginsystem from '../assets/loginsystem-preview.png';
import sha from '../assets/sha-preview.png'; 

const projects = [
    {
        name: 'Portfolio Webpage',
        created: '6/26/22',
        img:'',
        languages: [
            <JavascriptSVG />, <ReactSVG />, <NodeSVG />, <HTMLSVG />, <CSSSVG />, <Aws />, <GITSVG />
        ],
        preview: '',
        code: 'https://github.com/alvxck/alvxck',
        info: 'Personal portfolio webpage.',
    }, 
    {
        name: 'Authentication Service',
        created: '5/7/22',
        img:loginsystem,
        languages: [
            <JavascriptSVG />, <ReactSVG />, <NodeSVG />, <ExpressSVG />, <MongoDBSVG />, <JestSVG />, <HTMLSVG />, <CSSSVG />, <GITSVG />
        ],
        preview: 'https://raw.githubusercontent.com/alvxck/Login-System/main/login-system-demo.gif',
        code: 'https://github.com/alvxck/Login-System',
        info: 'MERN login / registration system with REST.',
    }, 
    // {
    //     name: 'Traffic Recognition System',
    //     created: 'TBD',
    //     img:'',
    //     languages: [
    //         <PythonSVG />, <TensorFlowSVG />, <GITSVG />
    //     ],
    //     preview: '',
    //     code: '',
    //     info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    // },
    {
        name: "Secure Hash Algorithm's",
        created: '3/20/22',
        img: sha,
        languages: [
            <PythonSVG />, <GITSVG />
        ],
        preview: 'https://raw.githubusercontent.com/alvxck/SHA/main/sha-demo.gif',
        code: 'https://github.com/alvxck/SHA',
        info: 'Python implementation of all SHA-1, SHA-2, and SHA-3 cryptographic hash algorithms.',
    }, 
    // {
    //     name: 'PDF Securitization',
    //     created: 'TBD',
    //     img:'',
    //     preview: '',
    //     code: '',
    //     info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    // }
]

export default projects;