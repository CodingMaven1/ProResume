import React from "react";
import {connect} from 'react-redux';
import {navigateData} from '../../redux/user/user-actions';
import Slider from "react-slick";

import PersonalInfo from './LeftNavComponents/PersonalInfo/PersonalInfo';
import Career from './LeftNavComponents/Career/Career';
import Education from './LeftNavComponents/Education/Education';
import Skills from './LeftNavComponents/Skills/Skills';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LeftNav.scss';

class LeftNav extends React.Component{

    onClickHandler = (e,type) => {
        e.preventDefault();
        const {navigateData} = this.props;
        navigateData(type)
    }

    render(){
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        const {view} = this.props;
        let inputFields;

        if(view.PersonalInfo === true){
            inputFields = <PersonalInfo />
        }
        else if(view.Career === true){
            inputFields = <Career />
        }
        else if(view.Education === true){
            inputFields = <Education />
        }
        else if(view.Skills === true){
            inputFields = <Skills />
        }

        return(
            <div className="LeftNav">
                <Slider {...settings}>
                    <h1 className="LeftNav--Options" onClick={event => this.onClickHandler(event,"PersonalInfo")}>Personal Information</h1>
                    <h1 className="LeftNav--Options" onClick={event => this.onClickHandler(event,"Career")}>Career</h1>
                    <h1 className="LeftNav--Options" onClick={event => this.onClickHandler(event,"Education")}>Education</h1>
                    <h1 className="LeftNav--Options" onClick={event => this.onClickHandler(event,"Skills")}>Skills</h1>
                </Slider>
                <div className="LeftNav--Content">
                    {inputFields}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    view: state.user.view
})

const mapDispatchToProps = dispatch => ({
    navigateData : data => dispatch(navigateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);