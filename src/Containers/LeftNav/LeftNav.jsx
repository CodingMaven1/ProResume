import React from "react";
import PersonalInfo from './LeftNavComponents/PersonalInfo/PersonalInfo';
import Career from './LeftNavComponents/Career/Career';
import './LeftNav.scss';

class LeftNav extends React.Component{

    render(){
        return(
            <div className="LeftNav">
                <div className="LeftNav--Navigation">
                    
                </div>
                {/* <PersonalInfo /> */}
                <Career />
            </div>
        )
    }
}


export default LeftNav;