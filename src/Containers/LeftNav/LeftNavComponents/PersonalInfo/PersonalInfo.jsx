import React from "react";
import { connect } from "react-redux";
import {modifyData} from '../../../../redux/user/user-actions';
import Input from '../../../../Components/Input/Input';
import './PersonalInfo.scss';

class PersonalInfo extends React.Component{

    onChangeHandler = (e) => {
        let value = e.target.value;
        let {modifyData, ...dataObject} = this.props;
        dataObject.Name = value;
        // modifyData({...dataObject});
    }

    render(){
        let {Name} = this.props;
        return(
            <div className="PersonalInfo">
                <Input changed={event => this.onChangeHandler(event)} value={Name} type="text" placeholder="Name" />
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