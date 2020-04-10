import React from "react";
import { connect } from 'react-redux';
import {changeTemplate} from '../../../../redux/user/user-actions';
import TemplateCard from '../../../../Components/TemplateCard/TemplateCard';
import './TemplateChange.scss';

class TemplateChange extends React.Component {
    render(){
        let {changeTemplate} = this.props;
        return(
            <div className="TemplateChange">
                <TemplateCard clicked={() => changeTemplate("Satiny")} />
                <TemplateCard clicked={() => changeTemplate("Euphony")} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeTemplate: type => dispatch(changeTemplate(type))
})

export default connect(null,mapDispatchToProps)(TemplateChange);