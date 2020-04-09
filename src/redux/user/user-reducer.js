import TemplateDummyData from '../../Containers/PdfViewer/TemplateDummyData';

const INITIAL_STATE = {
    data: TemplateDummyData.Satiny
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CHANGE_TEMPLATE':
            return{
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;