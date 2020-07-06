function capitalize(word){
    var firstChar = word.charAt(0).toUpperCase();
    var restString = word.slice(1);
    var result = firstChar.concat("", restString);
    return result;
    // console.log("placeholder");
}
module.exports = capitalize;