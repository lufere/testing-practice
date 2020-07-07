const calculator = require("./calculator");

const add = calculator.add;
const substract = calculator.substract;
const multiply = calculator.multiply;
const divide = calculator.divide;

test('Adding 2 numbers',()=>{
    expect(add(2,2)).toBe(4)
})

test('Adding negative numbers',()=>{
    expect(add(20,-2)).toBe(18)
})

test('Adding decimal numbers',()=>{
    expect(add(20.5, 2.55)).toBe(23.05)
})

test('Adding big numbers',()=>{
    expect(add(2000000000,2)).toBe(2000000002)
})

test('Substracting 2 numbers',()=>{
    expect(substract(6,2)).toBe(4)
})

test('Substracting with negative numbers',()=>{
    expect(substract(-6,2)).toBe(-8)
})

test('Multiplying 2 numbers',()=>{
    expect(multiply(6,2)).toBe(12)
})

test('Multiplying negative numbers',()=>{
    expect(multiply(-5,2)).toBe(-10)
})

test('Multiplying big numbers',()=>{
    expect(multiply(68743,21781)).toBe(1497291283)
})

test('Dividing 2 numbers',()=>{
    expect(divide(6,2)).toBe(3)
})

test('Dividing negative numbers',()=>{
    expect(divide(10,-2)).toBe(-5)
})

test('Dividing numbers with fractional results',()=>{
    expect(divide(7,2)).toBe(3.5)
})

test('Dividing decimal numbers',()=>{
    expect(divide(7.5,3)).toBe(2.5)
})