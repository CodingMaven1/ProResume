import React from "react";
import { connect } from 'react-redux';
import {changeTemplate} from '../../../../redux/user/user-actions';
import satiny from '../../../../Assets/satiny.png';
import euphony from '../../../../Assets/euphony.png';
import './TemplateChange.scss';

class TemplateChange extends React.Component {
    render(){
        let {changeTemplate} = this.props;
        return(
            <div className="TemplateChange">
                <img className="TemplateChange--Img" src={satiny} alt="Temp1" onClick={() => changeTemplate("Satiny")} />
                <img className="TemplateChange--Img" src={euphony} alt="Temp2" onClick={() => changeTemplate("Euphony")} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeTemplate: type => dispatch(changeTemplate(type))
})

export default connect(null,mapDispatchToProps)(TemplateChange);