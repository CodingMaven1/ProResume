import React from 'react';
import {connect} from "react-redux";
import {modifyData} from '../../../../redux/user/user-actions';
import Input from '../../../../Components/Input/Input';
import './Career.scss';

class Career extends React.Component{

    onChangeHandler = (e, type) => {
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
            <div className="Career">
                <div className="Career--Experience">
                    <h1 className="Career--Title">Add Work Experience:</h1>
                    <div className="Career--Inputs">
                        <Input label="Post" changed={event => this.onChangeHandler(event,"CareerHistory 0 Post")} type="text" placeholder="Post" />
                        <Input label="Place" changed={event => this.onChangeHandler(event,"CareerHistory 0 Pos")} type="text" placeholder="Place" />
                        <Input label="Work" changed={event => this.onChangeHandler(event,"CareerHistory 0 Details First")} type="textarea" placeholder="Work Details" row="2" col="40" />
                        <Input label="Work" changed={event => this.onChangeHandler(event,"CareerHistory 0 Details Second")} type="textarea" placeholder="Work Details" row="2" col="40" />
                    </div>
                </div>

                <div className="Career--Experience">
                    <h1 className="Career--Title">Add Work Experience:</h1>
                    <div className="Career--Inputs">
                        <Input label="Post" changed={event => this.onChangeHandler(event,"CareerHistory 1 Post")} type="text" placeholder="Post" />
                        <Input label="Place" changed={event => this.onChangeHandler(event,"CareerHistory 1 Pos")} type="text" placeholder="Place" />
                        <Input label="Work" changed={event => this.onChangeHandler(event,"CareerHistory 1 Details First")} type="textarea" placeholder="Work Details" row="2" col="40" />
                        <Input label="Work" changed={event => this.onChangeHandler(event,"CareerHistory 1 Details Second")} type="textarea" placeholder="Work Details" row="2" col="40" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    modifyDataFunction: data => dispatch(modifyData(data))
})

export default connect(null, mapDispatchToProps)(Career);