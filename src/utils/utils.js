const { charColorMap } = require("./color")

const ATOZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const randomColorIndex = () => Number((Math.random() * 19).toFixed())

const randomChar = () => ATOZ[Number((Math.random() * ATOZ.length - 1).toFixed())] || ATOZ[0]
module.exports.firstCharOfFirstTwoWord = (name) => name.split(" ", 2).map(word => word[0]).join("")
module.exports.svgImg = (chars, options) => {
    let rounded = false
    if(options){
        if(options.rounded) rounded = true
    }
    let color = charColorMap[chars]
    if(rounded){
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com" viewBox="0 0 150 150" width="150" height="150">  
        <circle cx="75" cy="75" r="75"  width="150" height="150" style="fill: ${color.bg}; stroke: ${color.color};"/>
          <text style="white-space: pre; fill: ${color.color}; font-family: Arial, sans-serif; font-size: 400%" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${chars}</text>
        </svg>`
    }else{
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com" viewBox="0 0 150 150" width="150" height="150">  
        <rect width="150" height="150" style="fill: ${color.bg}; stroke: ${color.color};"/>
          <text style="white-space: pre; fill: ${color.color}; font-family: Arial, sans-serif; font-size: 400%" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${chars}</text>
        </svg>`
    }
}


module.exports.randomTwoChar = () => {
    return `${randomChar()}${randomChar()}`
}


module.exports.response = (success, statusCode, data, message, errors) => ({
    success, statusCode, message, data, errors, 
})