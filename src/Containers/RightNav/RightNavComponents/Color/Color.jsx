import React from "react";
import {connect} from 'react-redux';
import {changeColor} from '../../../../redux/actions/actions-action';
import { TwitterPicker } from 'react-color';

import './Color.scss';

class ColorPicker extends React.Component{

    handleColorSwatchPrimary = (color) => {
        let statecolor = color.hex;
        let {colorFunction} = this.props;
        let data = {
            type: 'primary',
            color: statecolor
        }
        colorFunction(data)
    }

    handleColorSwatchSecondary = (color) => {
        let statecolor = color.hex;
        let {colorFunction} = this.props;
        let data = {
            type: 'secondary',
            color: statecolor
        }
        colorFunction(data)
    }

    handleColorSwatchFont = (color) => {
        let statecolor = color.hex;
        let {colorFunction} = this.props;
        let data = {
            type: 'font',
            color: statecolor
        }
        colorFunction(data)
    }

    render(){
        return(
            <div className="Color">
                <div className="Color--Type">
                    <h1 className="Color--TypeHeading">Primary Color</h1>
                    <TwitterPicker triangle="hide" onChangeComplete={this.handleColorSwatchPrimary}/>
                </div>
                <div className="Color--Type">
                    <h1 className="Color--TypeHeading">Secondary Color</h1>
                    <TwitterPicker triangle="hide" onChangeComplete={this.handleColorSwatchSecondary} />
                </div>
                <div className="Color--Type">
                    <h1 className="Color--TypeHeading">Font Color</h1>
                    <TwitterPicker triangle="hide" onChangeComplete={this.handleColorSwatchFont} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    colorFunction: data => dispatch(changeColor(data))
})

export default connect(null, mapDispatchToProps)(ColorPicker);