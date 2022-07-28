import React from 'react';
import InterestsCard from './InterestsCard';
import interests from '../data/interest-data';

function Interests(props) {
    return (
        <div className={props.selected ? 'interests-container-open' : 'interests-container-closed'}>
            <div className='interests-content'>
                {interests.map((interest) => (
                    <InterestsCard
                        key={interest.key}
                        img={interest.img}
                        caption={interest.caption}
                        info={interest.info}
                    />
                ))}
            </div>
        </div>
    )
}

export default Interests;