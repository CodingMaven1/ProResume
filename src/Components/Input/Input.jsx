import React from "react";

import './Input.scss';

const Input = (props) => {
    switch(props.type){
        case "text":
            return(
                <input className="Input" onChange={props.changed} value={props.value} type={props.type} placeholder={props.placeholder} />
            )
        case "textarea":
            return(
                <textarea className="Input--Select" rows={props.row} cols={props.col} onChange={props.changed} value={props.value} placeholder={props.placeholder} />
            )
        default:
            return(
                <input className="Input" onChange={props.changed} value={props.value} type={props.type} placeholder={props.placeholder} />
            )
    }

}

export default Input;