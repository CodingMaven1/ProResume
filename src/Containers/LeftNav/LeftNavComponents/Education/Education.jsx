import React from "react";
import {connect} from "react-redux";

import {modifyData} from '../../../../redux/user/user-actions';
import Input from '../../../../Components/Input/Input';
import './Education.scss';

class Education extends React.Component{

    onChangeHandler = (e, type) => {
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
            <div className="Education">
                <div className="Education--Details">
                    <h1 className="Education--Title">Add Education Details:</h1>
                    <div className="Education--Inputs">
                        <Input label="College / School" changed={event => this.onChangeHandler(event,"Education 0 Name")} type="text" placeholder="College / School" />
                        <Input label="Degree" changed={event => this.onChangeHandler(event,"Education 0 Degree")} type="text" placeholder="Degree" />
                        <Input label="Duration" changed={event => this.onChangeHandler(event,"Education 0 Duration")} type="text" placeholder="Duration" />
                    </div>
                </div>

                <div className="Education--Details">
                    <h1 className="Education--Title">Add Education Details:</h1>
                    <div className="Education--Inputs">
                        <Input label="College / School" changed={event => this.onChangeHandler(event,"Education 1 Name")} type="text" placeholder="College / School" />
                        <Input label="Degree" changed={event => this.onChangeHandler(event,"Education 1 Degree")} type="text" placeholder="Degree" />
                        <Input label="Duration" changed={event => this.onChangeHandler(event,"Education 1 Duration")} type="text" placeholder="Duration" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    modifyData: data => dispatch(modifyData(data))
})

export default connect(null, mapDispatchToProps)(Education);