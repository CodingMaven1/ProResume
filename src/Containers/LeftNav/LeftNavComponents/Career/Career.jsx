import React from 'react';
import {connect} from "react-redux";
import {modifyData, deleteDummyData, addDummyData} from '../../../../redux/user/user-actions';

import Input from '../../../../Components/Input/Input';

import plus from '../../../../Assets/plus.svg';
import minus from '../../../../Assets/minus.svg';
import './Career.scss';

class Career extends React.Component{

    state = {
        count: 1
    }

    onChangeHandler = (e, type) => {
        let value = e.target.value;
        let {modifyDataFunction} = this.props;
        let typewithdata = {
            type: type,
            val: value
        }
        modifyDataFunction(typewithdata);
    }

    onInsertFields = (e) => {
        e.preventDefault();
        let count = this.state.count;
        count = count + 1
        this.setState({count: count})
        let {addDummyDataFunction} = this.props;
        addDummyDataFunction("CareerHistory")
    }

    onDeleteFields = (e) => {
        e.preventDefault();
        let count = this.state.count;
        count = count - 1
        this.setState({count: count})
        let {deleteDummyDataFunction} = this.props
        deleteDummyDataFunction("CareerHistory")
    }

    render(){
        let arr = []
        for(let i = 0; i<= this.state.count; i++){
            arr[i] = i
        }
        return(
            <div className="Career">
                {
                    arr.map(obj => {
                        let post = "CareerHistory " + obj.toString() + " Post"
                        let place = "CareerHistory " + obj.toString() + " Place"
                        let first = "CareerHistory " + obj.toString() + " Details First"
                        let second = "CareerHistory " + obj.toString() + " Details Second"
                        return(
                            <div key={obj} className="Career--Experience">
                                <h1 className="Career--Title">Add Work Experience:</h1>
                                <div className="Career--Inputs">
                                    <Input label="Post" changed={event => this.onChangeHandler(event, post)} type="text" placeholder="Post" />
                                    <Input label="Place" changed={event => this.onChangeHandler(event, place)} type="text" placeholder="Place" />
                                    <Input label="Work" changed={event => this.onChangeHandler(event,first)} type="textarea" placeholder="Work Details" row="2" col="40" />
                                    <Input label="Work" changed={event => this.onChangeHandler(event,second)} type="textarea" placeholder="Work Details" row="2" col="40" />
                                </div>
                            </div>
                        )
                    })
                }
                <div className="Career--AddImgs">
                    <img src={plus} alt="plus" onClick={event => this.onInsertFields(event)} className="Career--Add" />
                    <img src={minus} alt="minus" onClick={event => this.onDeleteFields(event)} className="Career--Add" />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    modifyDataFunction: data => dispatch(modifyData(data)),
    addDummyDataFunction: type => dispatch(addDummyData(type)),
    deleteDummyDataFunction: type => dispatch(deleteDummyData(type))
})

export default connect(null, mapDispatchToProps)(Career);