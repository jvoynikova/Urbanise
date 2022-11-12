 export const getCamelCaseName = (name) => {
    return name.replace(/([A-Z])/g, ' $1').replace(/./, function (str) { return str.toUpperCase() })
}