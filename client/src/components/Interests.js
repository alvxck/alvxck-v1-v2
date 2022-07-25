import React from 'react';

function Interests(props) {
    return (
        <div className={props.selected ? 'interests-container-open' : 'interests-container-closed'}>
            <div className='interests-content'>
                {/* <img /> */}
            </div>
        </div>
    )
}

export default Interests;