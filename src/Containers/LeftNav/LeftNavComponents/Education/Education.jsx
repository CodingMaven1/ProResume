import React from "react";
import {connect} from "react-redux";

import {modifyData, deleteDummyData, addDummyData} from '../../../../redux/user/user-actions';
import Input from '../../../../Components/Input/Input';

import plus from '../../../../Assets/plus.svg';
import minus from '../../../../Assets/minus.svg';
import './Education.scss';

class Education extends React.Component{

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
        let {addDummyDataFunction} = this.props;
        addDummyDataFunction("Education")
    }

    onDeleteFields = (e) => {
        e.preventDefault();
        let {deleteDummyDataFunction} = this.props
        deleteDummyDataFunction("Education")
    }

    render(){
        let {countobj, data} = this.props;
        let Education = data["Education"]
        let count = countobj["Education"]
        let arr = []
        for(let i = 0; i<= count; i++){
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
                                    <Input label="College / School" value={Education[obj].Name}  changed={event => this.onChangeHandler(event,name)} type="text" placeholder={Education[obj].Name} />
                                    <Input label="Degree" value={Education[obj].Degree}  changed={event => this.onChangeHandler(event,degree)} type="text" placeholder={Education[obj].Degree} />
                                    <Input label="Duration" value={Education[obj].Duration} changed={event => this.onChangeHandler(event,duration)} type="text" placeholder={Education[obj].Duration} />
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

const mapStateToProps = state => ({
    data: state.user.data,
    countobj: state.user.count
})


export default connect(mapStateToProps, mapDispatchToProps)(Education);