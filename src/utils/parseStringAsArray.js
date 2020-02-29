module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(service => service.trim());
}