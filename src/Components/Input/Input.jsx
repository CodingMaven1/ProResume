import React from "react";

import './Input.scss';

const Input = (props) => {
    return(
        <input className="Input" onChange={props.changed} value={props.value} type={props.type} placeholder={props.placeholder} />
    )
}

export default Input;