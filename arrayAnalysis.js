function analyze(numbers){
    // if (numbers.length == 0) return{length:0}
    if (numbers.length != 0) var sum = numbers.reduce((a,b)=>a+b);
    let average = sum/numbers.length;
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let length = numbers.length;
    return {
        average:average,
        min:min,
        max:max,
        length:length
    }
}

module.exports = analyze;