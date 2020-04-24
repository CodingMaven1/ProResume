import React from "react";
import {connect} from 'react-redux';
import {navigateDataRight} from '../../redux/user/user-actions';
import Slider from "react-slick";
import TemplateChange from './RightNavComponents/TemplateChange/TemplateChange';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './RightNav.scss';

class RightNav extends React.Component{

    onClickHandler = (e,type) => {
        e.preventDefault();
        const {navigateDataRightFunction} = this.props;
        navigateDataRightFunction(type)
    }

    render(){
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

          const {viewRight} = this.props;
          let inputFields;
  
          if(viewRight.Templates === true){
              inputFields = <TemplateChange />
          }
        //   else if(viewRight.Colors === true){
        //       inputFields = <Career />
        //   }
        //   else if(viewRight.Fonts === true){
        //       inputFields = <Education />
        //   }

        return(
            <div className="RightNav">
                <Slider {...settings}>
                    <h1 className="RightNav--Options" onClick={event => this.onClickHandler(event,"Templates")}>Templates</h1>
                    <h1 className="RightNav--Options" onClick={event => this.onClickHandler(event,"Colors")}>Colors</h1>
                    <h1 className="RightNav--Options" onClick={event => this.onClickHandler(event,"Fonts")}>Fonts</h1>
                </Slider>
                {inputFields}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    viewRight: state.user.viewRight
})

const mapDispachToProps = dispatch => ({
    navigateDataRightFunction: type => dispatch(navigateDataRight(type))
})

export default connect(mapStateToProps, mapDispachToProps)(RightNav);