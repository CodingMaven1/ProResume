import React from "react";

import './Euphony.scss';

const Euphony = (props) => {
    let {name,pos,about,contact,careerHistory,education,skills} = props;
    return(
        <div className="Euphony">
            <div className="Euphony--Header">
                <h1 className="Euphony--HeaderName">{name}</h1>
                <h2 className="Euphony--HeaderPos">{pos}</h2>
                <div className="Euphony--HeaderContact">
                    <h2 className="Euphony--HeaderContactTitle">{contact.Mobile}</h2>
                    <h2 className="Euphony--HeaderContactTitle">  {contact.Email}</h2>
                    <h2 className="Euphony--HeaderContactTitle">  {contact.Website}</h2>
                    <h2 className="Euphony--HeaderContactTitle"> {contact.Address}</h2>
                </div>
            </div>
            <div className="Euphony--Body">
                <div className="Euphony--BodyAbout">
                    <div className="Euphony--BodyTitle">Profile</div>
                    <p className="Euphony--BodyAboutContent">{about}</p>
                </div>
                <div className="Euphony--BodyEducation">
                    <div className="Euphony--BodyTitle">Education</div>
                    <div className="Euphony--BodyEducationContainer">
                    {
                        education.map((obj,index)=>{
                            return(
                                <div className="Euphony--BodyEducationContent">
                                    <p className="Euphony--BodyEducationContentYear">{obj[2][0]}</p>
                                    <div className="Euphony--BodyEducationContentCollege">
                                        <h2 className="Euphony--BodyEducationContentCollegeName">{obj[0]}</h2>    
                                        <h2 className="Euphony--BodyEducationContentCollegeDegree">{obj[1]}</h2>    
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="Euphony--BodyRow">
                    <div className="Euphony--BodyCareer">
                        <div className="Euphony--BodyTitle">Work Experience</div>
                        {
                            careerHistory.map((opt,idx) => {
                                return(
                                    <div key={idx} className="Euphony--BodyCareerInfo">
                                        <h1 className="Euphony--BodyCareerInfoTitle">{opt[1]}</h1>
                                        <h2 className="Euphony--BodyCareerInfoSubtitle">{opt[0]}</h2>
                                        <div className="Euphony--BodyCareerInfoDetail">
                                            {
                                                opt[2].map((option,index) => {
                                                    return(
                                                        <p key={index} className="Euphony--BodyCareerInfoHeading">{option}</p>  
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="Euphony--BodySkills">
                        <div className="Euphony--BodyTitle">Skills</div>
                        <div className="Euphony--BodySkillsInfo">
                            {
                                skills.map((opt,idx) => {
                                    return(
                                        <p className="Euphony--BodySkillsInfoTitle" key={idx}>{opt}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Euphony;