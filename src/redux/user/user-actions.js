export const changeTemplate = template => ({
    type: 'CHANGE_TEMPLATE',
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