import React from "react";
import {connect} from "react-redux";

import {modifyData, deleteDummyData, addDummyData} from '../../../../redux/user/user-actions';
import Input from '../../../../Components/Input/Input';

import plus from '../../../../Assets/plus.svg';
import minus from '../../../../Assets/minus.svg';
import './Education.scss';

class Education extends React.Component{
    state = {
        count : 1
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
        addDummyDataFunction("Education")
    }

    onDeleteFields = (e) => {
        e.preventDefault();
        let count = this.state.count;
        count = count - 1
        this.setState({count: count})
        let {deleteDummyDataFunction} = this.props
        deleteDummyDataFunction("Education")
    }

    render(){
        let arr = []
        for(let i = 0; i<= this.state.count; i++){
            arr[i] = i
        }
        return(
            <div className="Education">
                {
                    arr.map(obj => {
                        let name = "Education " + obj.toString() + " Name"
                        let degree = "Education " + obj.toString() + " Degree"
                        let duration = "Education " + obj.toString() + " Duration"
                        console.log(name)
                        return(
                            <div key={obj} className="Education--Details">
                                <h1 className="Education--Title">Add Education Details:</h1>
                                <div className="Education--Inputs">
                                    <Input label="College / School" changed={event => this.onChangeHandler(event,name)} type="text" placeholder="College / School" />
                                    <Input label="Degree" changed={event => this.onChangeHandler(event,degree)} type="text" placeholder="Degree" />
                                    <Input label="Duration" changed={event => this.onChangeHandler(event,duration)} type="text" placeholder="Duration" />
                                </div>
                            </div>
                        )
                    })
                }

                <div className="Education--AddImgs">
                    <img src={plus} alt="plus" onClick={event => this.onInsertFields(event)} className="Education--Add" />
                    <img src={minus} alt="minus" onClick={event => this.onDeleteFields(event)} className="Education--Add" />
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

export default connect(null, mapDispatchToProps)(Education);