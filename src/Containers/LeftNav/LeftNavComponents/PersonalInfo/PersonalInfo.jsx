import React from "react";
import { connect } from "react-redux";
import {modifyData} from '../../../../redux/user/user-actions';
import Input from '../../../../Components/Input/Input';
import './PersonalInfo.scss';

class PersonalInfo extends React.Component{

    onChangeHandler = (e,type) => {
        let value = e.target.value;
        let {modifyData} = this.props;
        let typewithdata = {
            type: type,
            val: value
        }
        modifyData(typewithdata);
    }

    render(){
        return(
            <div className="PersonalInfo">
                <Input changed={event => this.onChangeHandler(event,"Name")} type="text" placeholder="Name" />
                <Input changed={event => this.onChangeHandler(event,"Pos")} type="text" placeholder="Position" />
                <Input changed={event => this.onChangeHandler(event,"About")} type="textarea" placeholder="About Yourself" row="8" col="40" />
                <Input changed={event => this.onChangeHandler(event,"Mobile")} type="text" placeholder="Mobile Number" />
                <Input changed={event => this.onChangeHandler(event,"Email")} type="text" placeholder="Email" />
                <Input changed={event => this.onChangeHandler(event,"Website")} type="text" placeholder="Website" />
                <Input changed={event => this.onChangeHandler(event,"Address")} type="text" placeholder="Address" />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dataObject: state.user.data
})

const mapDispatchToProps = dispatch => ({
    modifyData: data => dispatch(modifyData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);