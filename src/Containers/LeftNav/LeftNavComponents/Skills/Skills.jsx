import React from "react";
import {connect} from "react-redux";
import {modifyData, increaseRating, decreaseRating, addDummyData, deleteDummyData} from '../../../../redux/user/user-actions';

import Input from '../../../../Components/Input/Input';

import plus from '../../.././../Assets/plus.svg';
import minus from '../../../../Assets/minus.svg';
import './Skills.scss';

class Skills extends React.Component{

    state = {
        count: 5
    }

    onChangeHandler = (e,type) => {
        let value = e.target.value;
        let {modifyDataFunction} = this.props;
        let typewithdata = {
            type: type,
            val: value
        }
        modifyDataFunction(typewithdata);
    }

    onIncreaseHandler = (e,idx) => {
        let {increaseRatingFunction} = this.props;
        increaseRatingFunction(idx);
    }

    onDecreaseHandler = (e,idx) => {
        let {decreaseRatingFuntion} = this.props;
        decreaseRatingFuntion(idx);
    }

    onInsertFields = (e) => {
        e.preventDefault();
        let count = this.state.count;
        count = count + 1
        this.setState({count: count})
        let {addDummyDataFunction} = this.props;
        addDummyDataFunction("Skills")
    }

    onDeleteFields = (e) => {
        e.preventDefault();
        let count = this.state.count;
        count = count - 1
        this.setState({count: count})
        let {deleteDummyDataFunction} = this.props
        deleteDummyDataFunction("Skills")
    }

    render(){
        let {data} = this.props
        let skills = data.Skills;
        for(let i = 0; i< skills.length; i++){
            if(skills[i].value > 5){
                skills[i].value = 5
            }
            else if(skills[i].value < 0){
                skills[i].value = 0
            }
        }
        let arr = []
        for(let i = 0; i <= this.state.count; i++){
            arr[i] = i
        }
        return(
            <div className="Skills">
                {
                    arr.map(obj => {
                        let key = "Skills " + obj.toString() + " key"
                        return(
                            <div key={obj} className="Skills--Div">
                                <Input label="Skill" changed={event => this.onChangeHandler(event,key)} type="text" placeholder="Skill" />
                                <div className="Skills--DivRating">
                                    <img src={minus} className="Skills--DivRatingImg" alt="minus" onClick={event => this.onDecreaseHandler(event,obj.toString())} />
                                    <h2 className="Skills--DivRatingScore">{skills[obj].value}</h2>
                                    <img src={plus} className="Skills--DivRatingImg" alt="plus" onClick={event => this.onIncreaseHandler(event,obj.toString())}/>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="Skills--AddImgs">
                    <img src={plus} alt="plus" onClick={event => this.onInsertFields(event)} className="Skills--Add" />
                    <img src={minus} alt="minus" onClick={event => this.onDeleteFields(event)} className="Skills--Add" />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    modifyDataFunction:  data => dispatch(modifyData(data)),
    increaseRatingFunction: value => dispatch(increaseRating(value)),
    decreaseRatingFuntion: value => dispatch(decreaseRating(value)),
    addDummyDataFunction: type => dispatch(addDummyData(type)),
    deleteDummyDataFunction: type => dispatch(deleteDummyData(type))
})

const mapStateToProps = state => ({
    data: state.user.data
})

export default connect(mapStateToProps,mapDispatchToProps)(Skills);