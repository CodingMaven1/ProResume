import {changeColor} from './actions-util';

const INITIAL_STATE = {
    color: {
        primary: null,
        secondary: null,
        font: null
    },
    font: 'Raleway'
}

const actionsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CHANGE_COLOR':
            return{
                ...state,
                color: changeColor(state.color,action.payload)
            }
        case 'CHANGE_FONT':
            return{
                ...state,
                font: action.payload
            }
        default:
            return state;
    }
} 

export default actionsReducer;