export const updateValue = (data, updatedvalue) => {
    let type = updatedvalue.type
    let updatedData = data;
    updatedData[type] = updatedvalue.val

    return {...updatedData};
}