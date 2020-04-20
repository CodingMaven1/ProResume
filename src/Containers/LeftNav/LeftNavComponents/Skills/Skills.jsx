import React from "react";
import {connect} from "react-redux";
import {modifyData, increaseRating, decreaseRating} from '../../../../redux/user/user-actions';
import Input from '../../../../Components/Input/Input';

import plus from '../../.././../Assets/plus.svg';
import minus from '../../../../Assets/minus.svg';
import './Skills.scss';

class Skills extends React.Component{

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

    render(){
        let {data} = this.props
        let skills = data.Skills;
        return(
            <div className="Skills">
                <div className="Skills--Div">
                    <Input label="Skill" changed={event => this.onChangeHandler(event,"Skills 0 key")} type="text" placeholder="Skill" />
                    <div className="Skills--DivRating">
                        <img src={minus} className="Skills--DivRatingImg" alt="minus" onClick={event => this.onDecreaseHandler(event,"0")} />
                        <h2 className="Skills--DivRatingScore">{skills[0].value}</h2>
                        <img src={plus} className="Skills--DivRatingImg" alt="plus" onClick={event => this.onIncreaseHandler(event,"0")}/>
                    </div>
                </div>

                <div className="Skills--Div">
                    <Input label="Skill" changed={event => this.onChangeHandler(event,"Skills 1 key")} type="text" placeholder="Skill" />
                    <div className="Skills--DivRating">
                        <img src={minus} className="Skills--DivRatingImg" alt="minus" onClick={event => this.onDecreaseHandler(event,"1")} />
                        <h2 className="Skills--DivRatingScore">{skills[1].value}</h2>
                        <img src={plus} className="Skills--DivRatingImg" alt="plus" onClick={event => this.onIncreaseHandler(event,"1")}/>
                    </div>
                </div>

                <div className="Skills--Div">
                    <Input label="Skill" changed={event => this.onChangeHandler(event,"Skills 2 key")} type="text" placeholder="Skill" />
                    <div className="Skills--DivRating">
                        <img src={minus} className="Skills--DivRatingImg" alt="minus" onClick={event => this.onDecreaseHandler(event,"2")} />
                        <h2 className="Skills--DivRatingScore">{skills[2].value}</h2>
                        <img src={plus} className="Skills--DivRatingImg" alt="plus" onClick={event => this.onIncreaseHandler(event,"2")}/>
                    </div>
                </div>

                <div className="Skills--Div">
                    <Input label="Skill" changed={event => this.onChangeHandler(event,"Skills 3 key")} type="text" placeholder="Skill" />
                    <div className="Skills--DivRating">
                        <img src={minus} className="Skills--DivRatingImg" alt="minus" onClick={event => this.onDecreaseHandler(event,"3")} />
                        <h2 className="Skills--DivRatingScore">{skills[3].value}</h2>
                        <img src={plus} className="Skills--DivRatingImg" alt="plus" onClick={event => this.onIncreaseHandler(event,"3")}/>
                    </div>
                </div>

                <div className="Skills--Div">
                    <Input label="Skill" changed={event => this.onChangeHandler(event,"Skills 4 key")} type="text" placeholder="Skill" />
                    <div className="Skills--DivRating">
                        <img src={minus} className="Skills--DivRatingImg" alt="minus" onClick={event => this.onDecreaseHandler(event,"4")} />
                        <h2 className="Skills--DivRatingScore">{skills[4].value}</h2>
                        <img src={plus} className="Skills--DivRatingImg" alt="plus" onClick={event => this.onIncreaseHandler(event,"4")}/>
                    </div>
                </div>

                <div className="Skills--Div">
                    <Input label="Skill" changed={event => this.onChangeHandler(event,"Skills 5 key")} type="text" placeholder="Skill" />
                    <div className="Skills--DivRating">
                        <img src={minus} className="Skills--DivRatingImg" alt="minus" onClick={event => this.onDecreaseHandler(event,"5")} />
                        <h2 className="Skills--DivRatingScore">{skills[5].value}</h2>
                        <img src={plus} className="Skills--DivRatingImg" alt="plus" onClick={event => this.onIncreaseHandler(event,"5")}/>
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    modifyDataFunction:  data => dispatch(modifyData(data)),
    increaseRatingFunction: value => dispatch(increaseRating(value)),
    decreaseRatingFuntion: value => dispatch(decreaseRating(value))
})

const mapStateToProps = state => ({
    data: state.user.data
})

export default connect(mapStateToProps,mapDispatchToProps)(Skills);