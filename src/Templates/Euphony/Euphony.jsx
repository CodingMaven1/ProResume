import React from "react";
import {connect} from 'react-redux';

import star from '../../Assets/favourite.png';
import './Euphony.scss';

class Euphony extends React.Component {
    render(){
        let {name,pos,about,Mobile,Email,Website,Address,CareerHistory,education,skills, template, colors} = this.props;

        let primary = colors.primary;
        let secondary = colors.secondary;
        let fontcolor = colors.font;

        if(template !== "Euphony"){
            primary = "#f0eee2"
            secondary= "#1e5559"
            fontcolor= "#000"
        }
        if(primary === null){
            primary = "#f0eee2"
        }
        if(secondary === null){
            secondary= "#1e5559"
        }
        if(fontcolor === null){
            fontcolor = "#000"
        }

        return(
            <div className="Euphony" style={{backgroundColor: primary, color: fontcolor}}>
                <div className="Euphony--Header" style={{color: fontcolor}}>
                    <h1 className="Euphony--HeaderName" style={{color: secondary}}>{name}</h1>
                    <h2 className="Euphony--HeaderPos">{pos}</h2>
                    <div className="Euphony--HeaderContact">
                        <h2 className="Euphony--HeaderContactTitle">{Mobile}</h2>
                        <h2 className="Euphony--HeaderContactTitle">  {Email}</h2>
                        <h2 className="Euphony--HeaderContactTitle">  {Website}</h2>
                        <h2 className="Euphony--HeaderContactTitle"> {Address}</h2>
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
                                    <div key={index} className="Euphony--BodyEducationContent">
                                        <p className="Euphony--BodyEducationContentYear">{obj.Duration}</p>
                                        <div className="Euphony--BodyEducationContentCollege">
                                            <h2 className="Euphony--BodyEducationContentCollegeName">{obj.Name}</h2>    
                                            <h2 className="Euphony--BodyEducationContentCollegeDegree">{obj.Degree}</h2>    
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
                                CareerHistory.map((opt,idx) => {
                                    return(
                                        <div key={idx} className="Euphony--BodyCareerInfo">
                                            <h1 className="Euphony--BodyCareerInfoTitle">{opt.Place}</h1>
                                            <h2 className="Euphony--BodyCareerInfoSubtitle">{opt.Post}</h2>
                                            <div className="Euphony--BodyCareerInfoDetail">
                                            <p className="Euphony--BodyCareerInfoHeading">{opt.Details.First}</p>  
                                            <p className="Euphony--BodyCareerInfoHeading">{opt.Details.Second}</p>  
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
                                        let skill = <div className="Euphony--Skills">
                                            <p className="Euphony--BodySkillsInfoTitle" key={idx}>{opt.key}</p>
                                            <div className="Euphony--SkillsStarContainer">
                                                {
                                                    valarr.map(obj => {
                                                        return(
                                                            <img src={star} alt="star" className="Euphony--SkillsStar" />
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
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    template: state.user.template
})

export default connect(mapStateToProps)(Euphony);