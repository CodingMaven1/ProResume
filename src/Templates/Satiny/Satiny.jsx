import React from "react";
import Dp from '../../Assets/profile.jpg';
import './Satiny.scss';

const Satiny = (props) => {
    let {name,pos,about,achievements,contact,careerHistory,education,skills} = props;
    console.log(props);
    return(
        <div className="Satiny">
            <div className="Satiny--Left">
                <img src={Dp} alt="Dp" className="Satiny--LeftImg" />
                <h1 className="Satiny--LeftName">{name}</h1>
                <h1 className="Satiny--LeftPos">{pos}</h1>
                <div className="Satiny--LeftAbout">
                    <h1 className="Satiny--LeftTitle">Profile Summary</h1>
                    <p className="Satiny--LeftPara">{about}</p>
                </div>
                <div className="Satiny--LeftAchievements">
                    <h1 className="Satiny--LeftTitle">Career Achievements</h1>
                    {
                        achievements.map((obj,index) => {
                            return(
                                <p key={index} className="Satiny--LeftPara">{obj}</p>
                            )
                        })
                    }
                </div>
            </div>
            <div className="Satiny--Right">

            </div>
        </div>
    )
}

export default Satiny;