const toCamelCase = string => {
    const stringArr = string.split(/(?:-|_)+/)
    let strResult = stringArr[0]

    for (let i = 1; i < stringArr.length; i++) {
        const restOfWord = stringArr[i].substring(1)
        strResult += (stringArr[i].charAt(0).toUpperCase() + restOfWord)
    }
    return strResult
}

console.log(toCamelCase('hello-my_name-is'))