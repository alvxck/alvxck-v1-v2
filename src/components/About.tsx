import { data } from "../utils/props-data";


export const About = (props : any) => {
    const dataSkills = data[0]['skills'];

    return (
        <div className={props.selected === 'About' ? 'tab-selected' : 'tab-hidden'}>
            <div className='about'>
                <div className='about-header'>
                    <h1>Hi. I'm Alex.</h1>
                    <p>I'm a Software Engineer from Toronto, Canada interested in Cloud Computing Systems and Data Science for Predictive Analytics.</p>
                    <p>Apart from programming my main interests include hiking, travelling, and building high-performance sports cars.</p>
                </div>

                <div className='about-content'>
                    {dataSkills}
                </div>
            </div>
        </div>
    )
}
