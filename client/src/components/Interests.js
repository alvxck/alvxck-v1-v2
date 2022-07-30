import React from 'react';
import InterestsCard from './InterestsCard';
import interests from '../data/interest-data';

function Interests(props) {
    return (
        <div className={props.selected ? 'interests-container-open' : 'interests-container-closed'}>
            {interests.map((interest) => (
                <InterestsCard 
                    img={interest.img}
                    name={interest.name}
                    info={interest.info}
                />
            ))}
        </div>
    )
}

export default Interests;