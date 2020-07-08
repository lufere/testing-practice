const analyze = require('./arrayAnalysis');

test('Get the average', ()=>{
    expect(analyze([2,8,5,4,1]).average).toBe(4)
})

test('Average with negative numbers', ()=>{
    expect(analyze([12,8,-5,-4,-1]).average).toBe(2)
})

test('Average with many arguments', ()=>{
    expect(analyze([2,8,5,4,1,10,2,7,8,9,4,6,7,4,2,1]).average).toBe(5)
})

test('Using decimal arguments', ()=>{
    expect(analyze([2.32,8.798,5,4.77,1]).average).toBe(4.3776)
})

test('Getting the min value', ()=>{
    expect(analyze([42,22,10,5,17]).min).toBe(5)
})

test('min value when there are negative numbers', ()=>{
    expect(analyze([42,-22,10,5,-17]).min).toBe(-22)
})

test('Getting the max value', ()=>{
    expect(analyze([42,22,10,5,17]).max).toBe(42)
})

test('Getting the max value with big numbers', ()=>{
    expect(analyze([42,22,10,5,177777777777]).max).toBe(177777777777)
})

test('Getting length of an array', ()=>{
    expect(analyze([42,22,10,5,17]).length).toBe(5)
})

test('Getting length with a big array', ()=>{
    expect(analyze([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]).length).toBe(23)
})

test('Empty array', ()=>{
    expect(analyze([]).length).toBe(0)
})
