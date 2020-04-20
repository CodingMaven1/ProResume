import React from "react";
import Dp from '../../Assets/profile.jpg';
import star from '../../Assets/favourite.png'
import './Satiny.scss';

const Satiny = (props) => {
    let {name,pos,about,achievements,Mobile,Email,Website,Address,CareerHistory,education,skills} = props;
    console.log(props);
    return(
        <div className="Satiny">
            <div className="Satiny--Left">
                <img src={Dp} alt="Dp" className="Satiny--LeftImg" />
                <div className="Satiny--LeftPerson">
                    <h1 className="Satiny--LeftName">{name}</h1>
                    <h1 className="Satiny--LeftPos">{pos}</h1>
                </div>
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
                <div className="Satiny--LeftContact">
                    <h1 className="Satiny--LeftTitle">Contact Details</h1>
                    <p className="Satiny--LeftPara">Mobile: {Mobile}</p>
                    <p className="Satiny--LeftPara">Email: {Email}</p>
                    <p className="Satiny--LeftPara">Website: {Website}</p>
                    <p className="Satiny--LeftPara">Address: {Address}</p>

                </div>
            </div>
            <div className="Satiny--Right">
                <div className="Satiny--RightCareer">
                    <h1 className="Satiny--RightTitle">Career History</h1>
                        {
                            CareerHistory.map((obj,index) => {
                                return(
                                    <div key={index}>
                                        <h1 className="Satiny--RightSubtitle">{obj.Post}</h1>
                                        <h1 className="Satiny--RightDuration">{obj.Place}</h1>
                                        <p className="Satiny--RightPara">{obj.Details.First}</p>
                                        <p className="Satiny--RightPara">{obj.Details.Second}</p>
                                    </div>
                                )
                            })
                        }
                </div>

                <div className="Satiny--RightEducation">
                    <h1 className="Satiny--RightTitle">Education</h1>
                    {
                            education.map((obj,index) => {
                                return(
                                    <div key={index}>
                                        <h1 className="Satiny--RightSubtitle">{obj.Name}</h1>
                                        <h1 className="Satiny--RightDuration">{obj.Degree}</h1>
                                        <p className="Satiny--RightPara">{obj.Duration}</p>
                                    </div>
                                )
                            })
                        }
                </div>

                <div className="Satiny--RightSkills">
                    <h1 className="Satiny--RightTitle">Skills</h1>
                    {
                        skills.map((opt,idx) => {
                            let value = opt.value;
                            let valarr= []
                            if(value > 5){
                                value = 5
                            }
                            else if(value < 0){
                                value = 0
                            }
                            for(let q = 0; q<value; q++){
                                valarr[q] = q
                            }
                            let skill = <div className="Satiny--Skills">
                                <p className="Satiny--RightPara" key={idx}>{opt.key}</p>
                                <div className="Satiny--SkillsStarContainer">
                                    {
                                        valarr.map(obj => {
                                            return(
                                                <img src={star} alt="star" className="Satiny--SkillsStar" />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            return skill;
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Satiny;