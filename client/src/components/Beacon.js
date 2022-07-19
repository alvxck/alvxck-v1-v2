import React from 'react';

function Beacon(props) {

    return (
        <div 
            className='beacon'
            style={{ top: props.top, left: props.left}}
        >
            <div className='beacon-pulse'>
            </div> 
            <div className='beacon-link' onClick={props.onClick}>
                <div className='beacon-value'>
                    {props.svg}
                    <h1>{props.value}</h1>
                </div>
            </div>
        </div>
    )
}

export default Beacon;