import React from "react";
import {connect} from 'react-redux';
import Dp from '../../Assets/profile.jpg';
import star from '../../Assets/favourite.png'
import './Satiny.scss';

class Satiny extends React.Component {
    render(){
        let {data, template, colors} = this.props;
        let {Name,Pos,About,Mobile,Email,Address,Website,CareerHistory,Education,Skills} = data

        let primary = colors.primary;
        let secondary = colors.secondary;
        let fontcolor = colors.font;

        if(template !== "Satiny"){
            primary = "#f4f4ee"
            secondary= "#909090"
            fontcolor= "#000"
        }
        if(primary === null){
            primary = "#f4f4ee"
        }
        if(secondary === null){
            secondary= "#909090"
        }
        if(fontcolor === null){
            fontcolor = "#000"
        }

        let imgurl;
        if(this.props.url !== ''){
            imgurl = this.props.url
        }
        else{
            imgurl = Dp
        }

        return(
            <div className="Satiny">
                <div className="Satiny--Left" style={{backgroundColor: primary, color: fontcolor}}>
                    <img src={imgurl} alt="Dp" className="Satiny--LeftImg" />
                    <div className="Satiny--LeftPerson">
                        <h1 className="Satiny--LeftName">{Name}</h1>
                        <h1 className="Satiny--LeftPos">{Pos}</h1>
                    </div>
                    <div className="Satiny--LeftAbout">
                        <h1 className="Satiny--LeftTitle">Profile Summary</h1>
                        <p className="Satiny--LeftPara">{About}</p>
                    </div>
                    <div className="Satiny--LeftContact">
                        <h1 className="Satiny--LeftTitle">Contact Details</h1>
                        <p className="Satiny--LeftPara">Mobile: {Mobile}</p>
                        <p className="Satiny--LeftPara">Email: {Email}</p>
                        <p className="Satiny--LeftPara">Website: {Website}</p>
                        <p className="Satiny--LeftPara">Address: {Address}</p>
    
                    </div>
                </div>
                <div className="Satiny--Right"  style={{color: fontcolor}}>
                    <div className="Satiny--RightCareer">
                        <h1 className="Satiny--RightTitle">Career History</h1>
                            {
                                CareerHistory.map((obj,index) => {
                                    return(
                                        <div key={index}>
                                            <h1 className="Satiny--RightSubtitle" style={{color: secondary}}>{obj.Post}</h1>
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
                                Education.map((obj,index) => {
                                    return(
                                        <div key={index}>
                                            <h1 className="Satiny--RightSubtitle" style={{color: secondary}}>{obj.Name}</h1>
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
                            Skills.map((opt,idx) => {
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
 
}

const mapStateToProps = state => ({
    template: state.user.template,
    data: state.user.data,
    colors: state.actions.color
})

export default connect(mapStateToProps)(Satiny);