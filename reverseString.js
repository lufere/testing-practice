function reverseString(word){
    let reversed = "";
    for (let i = 0; i < word.length; i++) {
        let char = word.charAt(word.length-1-i);
        reversed += char;
    }
    return reversed;
}

module.exports = reverseString;
