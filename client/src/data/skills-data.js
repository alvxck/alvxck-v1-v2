import { ReactComponent as PythonSVG } from '../assets/python.svg';
import { ReactComponent as NumpySVG } from '../assets/numpy.svg';
import { ReactComponent as PytestSVG } from '../assets/pytest.svg';
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
import { ReactComponent as AwsSVG } from '../assets/aws.svg';
import { ReactComponent as CppSVG } from '../assets/cpp.svg';
import { ReactComponent as CSVG } from '../assets/c.svg';

const skills = [
    {
        key: 'skills-web-development',
        skill: 'Web Development',
        header_svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"/></svg>,
        header1: 'Languages && Libraries',
        svgs: [
            <JavascriptSVG />, <ReactSVG />, <NodeSVG />, <ExpressSVG />, <MongoDBSVG />, <JestSVG />, <HTMLSVG />, <CSSSVG />
        ],
        header2: 'Concepts',
        info: [
            <p>REST APIs</p>, <p>Middleware</p>, <p>DOM</p>, <p>Stateless & Stateful Endpoints</p>, <p>Responsive Design</p>, <p>Authentication</p>, <p>Unit / Integration / E2E Testing</p>, <p>State Management</p>, <p>React Hooks</p>
        ],
    },
    {
        key: 'skills-data-science',
        skill: 'Data Science',
        header_svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="-75 30 640 512"><path d="M160 80C160 53.49 181.5 32 208 32H240C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80zM0 272C0 245.5 21.49 224 48 224H80C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272zM400 96C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144C320 117.5 341.5 96 368 96H400z"/></svg>,
        header1: 'Languages && Libraries',
        svgs: [
            <PythonSVG />, <NumpySVG />, <PytestSVG />, <SQLSVG />
        ],
        header2: 'Concepts',
        info: [
            <p>Hashing</p>, <p>Unit Testing</p>, <p>Test Driven Development</p>, <p>1D / 2D / 3D Matricies</p>
        ],
    },
    {
        key: 'skills-embedded-system',
        skill: 'Embedded Systems',
        header_svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M160 352h192V160H160V352zM448 176h48C504.8 176 512 168.8 512 160s-7.162-16-16-16H448V128c0-35.35-28.65-64-64-64h-16V16C368 7.164 360.8 0 352 0c-8.836 0-16 7.164-16 16V64h-64V16C272 7.164 264.8 0 256 0C247.2 0 240 7.164 240 16V64h-64V16C176 7.164 168.8 0 160 0C151.2 0 144 7.164 144 16V64H128C92.65 64 64 92.65 64 128v16H16C7.164 144 0 151.2 0 160s7.164 16 16 16H64v64H16C7.164 240 0 247.2 0 256s7.164 16 16 16H64v64H16C7.164 336 0 343.2 0 352s7.164 16 16 16H64V384c0 35.35 28.65 64 64 64h16v48C144 504.8 151.2 512 160 512c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448H384c35.35 0 64-28.65 64-64v-16h48c8.838 0 16-7.164 16-16s-7.162-16-16-16H448v-64h48C504.8 272 512 264.8 512 256s-7.162-16-16-16H448V176zM384 368c0 8.836-7.162 16-16 16h-224C135.2 384 128 376.8 128 368v-224C128 135.2 135.2 128 144 128h224C376.8 128 384 135.2 384 144V368z"/></svg>,
        header1: 'Languages',
        svgs: [
            <CSVG />, <CppSVG />,
        ],
        header2: 'Concepts',
        info: [
            <p>OOP</p>, <p>Encapsulation</p>, <p>Inheritence</p>, <p>Polymorphism</p>, <p>Abstraction</p>
        ],
    },
    {
        key: 'skills-devops',
        skill: 'DevOps',
        header_svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z"/></svg>,
        header1: 'Tools',
        svgs: [
            <GITSVG />, <GithubSVG />, <AwsSVG />
        ],
    },
]

export default skills;