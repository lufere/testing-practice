function caesar(word, shift){
    encoded = word.split('').map((x)=>{
        letter = x.charCodeAt(0);
        if(letter>=97 && letter<=122){
            let result = letter + shift;
            if(result>122){
                let remainder = (result-122)%26;
                if(shift%26 == 0) return String.fromCharCode(letter);
                result = 96 + remainder;
            }
            if(result<97){
                let remainder = (97-result)%26;
                if(shift%26 == 0) return String.fromCharCode(letter);
                result = 123 - remainder;
            }
            return String.fromCharCode(result)
        }
        if(letter>=65 && letter<=90){
            let result = letter + shift;
            if (result>90){
                let remainder = (result-90)%26;
                if(shift%26 == 0) return String.fromCharCode(letter);
                result = 64+remainder;
            }
            if (result<65){
                let remainder = (65-result)%26;
                if(shift%26 == 0) return String.fromCharCode(letter);
                result = 91-remainder;
            }
            return String.fromCharCode(result)
        }
        else return String.fromCharCode(letter)
    })
    return encoded.join('')
}

module.exports = caesar;

