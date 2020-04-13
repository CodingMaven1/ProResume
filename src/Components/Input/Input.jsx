import React from "react";

import './Input.scss';

const Input = (props) => {
    switch(props.type){
        case "text":
            return(
                <div className="Input">
                    <label className="Input--Label">{props.label}</label>
                    <input className="Input--Text" onChange={props.changed} value={props.value} type={props.type} placeholder={props.placeholder} />
                </div>
            )
        case "textarea":
            return(
                <div className="Input">
                    <label className="Input--Label">{props.label}</label>
                    <textarea className="Input--Text" rows={props.row} cols={props.col} onChange={props.changed} value={props.value} placeholder={props.placeholder} />
                </div>
            )
        default:
            return(
                <div className="Input">
                    <label className="Input--Label">{props.label}</label>
                    <input className="Input--Text" onChange={props.changed} value={props.value} type={props.type} placeholder={props.placeholder} />
                </div>           
                )
    }

}

export default Input;