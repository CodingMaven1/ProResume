export const changeTemplate = template => ({
    type: 'CHANGE_TEMPLATE',
    payload: template
})

export const resetTemplate = template => ({
    type: 'RESET_TEMPLATE',
    payload: template
})

export const modifyData = data => ({
    type: 'MODIFY_DATA',
    payload: data
})

export const navigateData = data => ({
    type: 'NAVIGATE_DATA',
    payload: data
})

export const increaseRating = data => ({
    type: 'RATING_INCREASE',
    payload: data
})

export const decreaseRating = data => ({
    type: 'RATING_DECREASE',
    payload: data
})

export const addDummyData = data => ({
    type: "ADD_DUMMY_DATA",
    payload: data
})

export const deleteDummyData = data => ({
    type: "DELETE_DUMMY_DATA",
    payload: data
})