export const updateValue = (data, updatedvalue) => {
    let type = updatedvalue.type
    let typeArr = type.split(" ")
    let updatedData = data;
    console.log(typeArr)

    if(typeArr.length === 1){
        updatedData[typeArr[0]] = updatedvalue.val
    }
    else if(typeArr.length === 3){
        let dataObj = updatedData[typeArr[0]]
        let dataUpdate = dataObj[parseInt(typeArr[1])]
        dataUpdate[typeArr[2]] = updatedvalue.val
        dataObj[parseInt(typeArr[1])] = dataUpdate;
        updatedData[typeArr[0]] = dataObj
    }
    else if(typeArr.length === 4){
        let dataObj = updatedData[typeArr[0]]
        let dataUpdate = dataObj[parseInt(typeArr[1])]
        let dataObjType = dataUpdate[typeArr[2]]
        dataObjType[typeArr[3]] = updatedvalue.val
        dataUpdate[typeArr[2]] = dataObjType;
        dataObj[parseInt(typeArr[1])] = dataUpdate;
        updatedData[typeArr[0]] = dataObj
    }
    return {...updatedData};
}

export const updateView = (previousview,type) => {
    let newview = previousview;
    for(let i of Object.keys(previousview)){
        newview[i] = false
    }

    newview[type] = true

    return {...newview}
}

export const increaseRatingUtil = (previousData, index) => {
    let modifyData = previousData;
    let skills = modifyData.Skills;
    let value = skills[parseInt(index)].value;
    value = value + 1;
    skills[parseInt(index)].value = value;
    modifyData.Skills = skills;
    return {...modifyData}
}

export const decreaseRatingUtil = (previousData, index) => {
    let modifyData = previousData;
    let skills = modifyData.Skills;
    let value = skills[parseInt(index)].value;
    value = value - 1;
    skills[parseInt(index)].value = value;
    modifyData.Skills = skills;
    return {...modifyData}
}