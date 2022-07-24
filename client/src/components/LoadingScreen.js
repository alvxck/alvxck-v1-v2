import React from 'react';

function LoadingScreen(props) {
    return(
        <div className={props.loadState ? 'loading-container-await' : 'loading-container-loaded'}>
            <div className={props.loadState ? 'loading-header-await' : 'loading-header-loaded'}>
                <h1>Alexander Carvalho</h1>
            </div>
        </div>
    )
}

export default LoadingScreen;