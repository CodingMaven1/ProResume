import React from "react";
import PersonalInfo from './LeftNavComponents/PersonalInfo/PersonalInfo';
import './LeftNav.scss';

class LeftNav extends React.Component{

    render(){
        return(
            <div className="LeftNav">
                <PersonalInfo />
            </div>
        )
    }
}


export default LeftNav;