import React from "react";
import TemplateChange from './RightNavComponents/TemplateChange/TemplateChange';
import './RightNav.scss';

class RightNav extends React.Component{
    render(){
        return(
            <div className="RightNav">
                <TemplateChange />
            </div>
        )
    }
}

export default RightNav;