import TemplateDummyData from '../../Containers/PdfViewer/TemplateDummyData';

// UTILITY FUNCTION FOR UPDATING THE DATA

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

// UTILITY FUNCTION FOR NAVIGATING THE LEFT NAVBAR

export const updateView = (previousview,type) => {
    let newview = previousview;
    for(let i of Object.keys(previousview)){
        newview[i] = false
    }

    newview[type] = true

    return {...newview}
}

// UTILITY FUNCTION FOR INCREASING THE RATING

export const increaseRatingUtil = (previousData, index) => {
    let modifyData = previousData;
    let skills = modifyData.Skills;
    let value = skills[parseInt(index)].value;
    value = value + 1;
    skills[parseInt(index)].value = value;
    modifyData.Skills = skills;
    return {...modifyData}
}

// UTILITY FUNCTION FOR DECREASING THE RATING

export const decreaseRatingUtil = (previousData, index) => {
    let modifyData = previousData;
    let skills = modifyData.Skills;
    let value = skills[parseInt(index)].value;
    value = value - 1;
    skills[parseInt(index)].value = value;
    modifyData.Skills = skills;
    return {...modifyData}
}

// UTILITY FUNCTION FOR ADDING THE INPUT FIELDS

export const addDummyDataUtil = (previousData, type) => {
    let newData = previousData
    let obj;
    let typeToPush = newData[type]
    if(type === "CareerHistory"){
        obj = {Post: '', Place: '', Details: {First: '', Second: ''}}
    }
    else if(type === "Education"){
        obj = {Name: '', Degree: '',Duration: ''}
    }
    else if(type === "Skills"){
        obj = {key: "", value: 0}
    }
    typeToPush.push(obj)
    newData.type = typeToPush;
    return {...newData}
}

// UTILITY FUNCTION FOR INCREASING THE COUNT 

export const increaseCountUtil = (previousCount, type) => {
    let count = previousCount;
    let countValue = count[type];
    countValue = countValue + 1;
    count[type] = countValue;
    return {...count}
}

// UTILITY FUNCTION FOR DECREASING THE COUNT 

export const decreaseCountUtil = (previousCount, type) => {
    let count = previousCount;
    let countValue = count[type];
    countValue = countValue - 1;
    count[type] = countValue;
    return {...count}
}

// UTILITY FUNCTON FOR DELETING THE INPUT FIELDS

export const deleteDummyDataUtil = (previousData, type) => {
    let newData = previousData
    let typeToPush = newData[type]
    typeToPush.pop()
    newData.type = typeToPush;
    return {...newData}
}

// UTILITY FUNCTION FOR UPDAING THE DATA FOR NEXT TEMPLATE

export const changeTemplate = (previousData, type) => {
    let newData = TemplateDummyData[type]

    if(newData["CareerHistory"].length !== previousData["CareerHistory"].length){

        let difference = previousData["CareerHistory"].length - newData["CareerHistory"].length

        if(difference >= 0){
            let dataToBeAdded = previousData["CareerHistory"].splice(newData["CareerHistory"].length,difference)
            dataToBeAdded.map((obj,idx) => {
                newData["CareerHistory"].push(obj)
            })
        }

        else if(difference < 0){
            for(let i = 0; i<Math.abs(difference); i++){
                newData["CareerHistory"].pop()
            }
        }
    }

    if(newData["Education"].length !== previousData["Education"].length){

        let difference = previousData["Education"].length - newData["Education"].length

        if(difference >= 0){
            let dataToBeAdded = previousData["Education"].splice(newData["Education"].length,difference)
            dataToBeAdded.map((obj,idx) => {
                newData["Education"].push(obj)
            })
        }

        else if(difference < 0){
            for(let i = 0; i<Math.abs(difference); i++){
                newData["Education"].pop()
            }
        }
    }

    if(newData["Skills"].length !== previousData["Skills"].length){

        let difference = previousData["Skills"].length - newData["Skills"].length

        if(difference >= 0){
            let dataToBeAdded = previousData["Skills"].splice(newData["Skills"].length,difference)
            dataToBeAdded.map((obj,idx) => {
                newData["Skills"].push(obj)
            })
        }
        else if(difference < 0){
            for(let i = 0; i<Math.abs(difference); i++){
                newData["Skills"].pop()
            }
        }
    }

    return {...newData}
}