import {changeColor} from './actions-util';

const INITIAL_STATE = {
    color: {
        primary: null,
        secondary: null,
        font: null
    }
}

const actionsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CHANGE_COLOR':
            return{
                ...state,
                color: changeColor(state.color,action.payload)
            }
        default:
            return state;
    }
} 

export default actionsReducer;