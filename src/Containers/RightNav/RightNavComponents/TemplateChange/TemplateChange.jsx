import React from "react";
import { connect } from 'react-redux';
import {changeTemplate} from '../../../../redux/user/user-actions';
import TemplateCard from '../../../../Components/TemplateCard/TemplateCard';
import './TemplateChange.scss';
import TemplateDummyData from "../../../PdfViewer/TemplateDummyData";

class TemplateChange extends React.Component {
    render(){
        let {changeTemplate} = this.props;
        return(
            <div className="TemplateChange">
                <TemplateCard clicked={() => changeTemplate("Satiny")} />
                <TemplateCard clicked={() => changeTemplate("Template2")} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeTemplate: data => dispatch(changeTemplate(data))
})

export default connect(null,mapDispatchToProps)(TemplateChange);