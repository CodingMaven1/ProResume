//UTILITY FUNCTION FOR CHANGING THE COLORS

export const changeColor = (prevColor, data) => {
    let color = prevColor;
    color[data.type] = data.color
    return {...color}
}