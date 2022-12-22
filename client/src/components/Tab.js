import React from "react";

function Tab(props) {

    return (
        <div className={props.value === props.selected ? 'tablink-selected' : 'tablink'} onClick={props.onClick}>
            <h1 id={props.value + '-tab'}>{props.value}</h1>
        </div>
    )
}

export default Tab;