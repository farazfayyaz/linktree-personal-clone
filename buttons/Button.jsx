import React from "react";
import ReactDOM from "react-dom";
import LineIcon from 'lineicons-react';

export default function Button (props) {
    return (
<button className="button" >
            <a href={props.link} className="button-content">
                <p className="button-title">{props.name}</p>
                <LineIcon name = {props.icon} />
            </a>
        </button>
    )
}