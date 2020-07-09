function caesar(word, shift){
    encoded = word.split('').map((x)=>{
        letter = x.charCodeAt(0);
        if((letter>=97 && letter<=122)||(letter>=65 && letter<=90)){
            return String.fromCharCode(letter+shift)
        }
        else return String.fromCharCode(letter)
    })
    return encoded.join('')
}

module.exports = caesar;

