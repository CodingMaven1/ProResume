import React from "react";
import { connect } from "react-redux";
import {modifyData} from '../../../../redux/user/user-actions';
import Input from '../../../../Components/Input/Input';
import './PersonalInfo.scss';

class PersonalInfo extends React.Component{

    onChangeHandler = (e,type) => {
        let value = e.target.value;
        let {modifyDataFunction} = this.props;
        let typewithdata = {
            type: type,
            val: value
        }
        modifyDataFunction(typewithdata);
    }

    render(){
        return(
            <div className="PersonalInfo">
                <Input label="Name" changed={event => this.onChangeHandler(event,"Name")} type="text" placeholder="Name" />
                <Input label="Position" changed={event => this.onChangeHandler(event,"Pos")} type="text" placeholder="Position" />
                <Input label="About Yourself" changed={event => this.onChangeHandler(event,"About")} type="textarea" placeholder="About Yourself" row="8" col="40" />
                <Input label="Mobile" changed={event => this.onChangeHandler(event,"Mobile")} type="text" placeholder="Mobile Number" />
                <Input label="Email" changed={event => this.onChangeHandler(event,"Email")} type="text" placeholder="Email" />
                <Input label="Website" changed={event => this.onChangeHandler(event,"Website")} type="text" placeholder="Website" />
                <Input label="Address" changed={event => this.onChangeHandler(event,"Address")} type="text" placeholder="Address" />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    modifyDataFunction: data => dispatch(modifyData(data))
})

export default connect(null, mapDispatchToProps)(PersonalInfo);