import React from "react";
import {connect} from "react-redux";

import {changeFont} from '../../../../redux/actions/actions-action';

import './Fonts.scss';

class Fonts extends React.Component{

    onClickHandler = (event, font) => {
        event.preventDefault();

        let {changeFontFunc} = this.props;

        changeFontFunc(font)
    }

    render(){
        return(
            <div className="Fonts">
                <div className="Fonts--Name" onClick={e => this.onClickHandler(e,"Raleway")}>Raleway</div>
                <div className="Fonts--Name" onClick={e => this.onClickHandler(e,"Lato")}>Lato</div>
                <div className="Fonts--Name" onClick={e => this.onClickHandler(e,"Open Sans")}>Open Sans</div>
                <div className="Fonts--Name" onClick={e => this.onClickHandler(e,"Ubuntu")}>Ubuntu</div>
                <div className="Fonts--Name" onClick={e => this.onClickHandler(e,"Montserrat")}>Montserrat</div>
                <div className="Fonts--Name" onClick={e => this.onClickHandler(e,"Rubik")}>Rubik</div>
                <div className="Fonts--Name" onClick={e => this.onClickHandler(e,"Source Sans Pro")}>Source Sans Pro</div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeFontFunc: data => dispatch(changeFont(data))
})

export default connect(null, mapDispatchToProps)(Fonts);