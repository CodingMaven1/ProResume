import TemplateDummyData from '../../Containers/PdfViewer/TemplateDummyData';
import {updateValue, updateView, increaseRatingUtil, decreaseRatingUtil, addDummyDataUtil, deleteDummyDataUtil, changeTemplate} from './user-utils';

const INITIAL_STATE = {
    data: TemplateDummyData["Satiny"],
    template: "Satiny",
    view: {
        PersonalInfo: true,
        Career: false,
        Education: false
    }
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CHANGE_TEMPLATE':
            return{
                ...state,
                // data: TemplateDummyData[action.payload],
                data: changeTemplate(state.data, action.payload),
                template: action.payload
            }
        case 'MODIFY_DATA':
            return{
                ...state,
                data: updateValue(state.data,action.payload)
            }
        case 'NAVIGATE_DATA':
            return{
                ...state,
                view: updateView(state.view, action.payload)
            }
        case 'RATING_INCREASE':
            return{
                ...state,
                data: increaseRatingUtil(state.data, action.payload)
            }
        case 'RATING_DECREASE':
            return{
                ...state,
                data: decreaseRatingUtil(state.data, action.payload)
            }
        case 'ADD_DUMMY_DATA':
            return{
                ...state,
                data: addDummyDataUtil(state.data, action.payload)
            }
        case 'DELETE_DUMMY_DATA':
            return{
                ...state,
                data: deleteDummyDataUtil(state.data, action.payload)
            }
        default:
            return state;
    }
}

export default userReducer;