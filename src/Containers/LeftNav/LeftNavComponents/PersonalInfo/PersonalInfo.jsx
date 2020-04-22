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
        let {data} = this.props;
        return(
            <div className="PersonalInfo">
                <Input label="Name" changed={event => this.onChangeHandler(event,"Name")} type="text" placeholder={data.Name} value={data.Name} />
                <Input label="Position" changed={event => this.onChangeHandler(event,"Pos")} type="text" placeholder={data.Pos} value={data.Pos} />
                <Input label="About Yourself" changed={event => this.onChangeHandler(event,"About")} type="textarea" placeholder={data.About} value={data.About} row="8" col="40" />
                <Input label="Mobile" changed={event => this.onChangeHandler(event,"Mobile")} type="text" placeholder={data.Mobile} value={data.Mobile} />
                <Input label="Email" changed={event => this.onChangeHandler(event,"Email")} type="text" placeholder={data.Email} value={data.Email} />
                <Input label="Website" changed={event => this.onChangeHandler(event,"Website")} type="text" placeholder={data.Website} value={data.Website} />
                <Input label="Address" changed={event => this.onChangeHandler(event,"Address")} type="text" placeholder={data.Address} value={data.Address} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    modifyDataFunction: data => dispatch(modifyData(data))
})

const mapStateToProps = state => ({
    data: state.user.data
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);