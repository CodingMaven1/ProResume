import React from "react";
import { TwitterPicker } from 'react-color';

import './Color.scss';

class ColorPicker extends React.Component{

    handleColorSwatch = (color) => {
        let statecolor = color.hex;
    }

    render(){
        return(
            <div className="Color">
                <div className="Color--Type">
                    <h1 className="Color--TypeHeading">Primary Color</h1>
                    <TwitterPicker triangle="hide" onChangeComplete={this.handleColorSwatch}/>
                </div>
                <div className="Color--Type">
                    <h1 className="Color--TypeHeading">Secondary Color</h1>
                    <TwitterPicker triangle="hide" onChangeComplete={this.handleColorSwatch} />
                </div>
                <div className="Color--Type">
                    <h1 className="Color--TypeHeading">Tertiary Color</h1>
                    <TwitterPicker triangle="hide" onChangeComplete={this.handleColorSwatch} />
                </div>
            </div>
        )
    }
}

export default ColorPicker;