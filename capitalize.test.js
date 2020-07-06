const capitalize = require('./capitalize');

test('word to Word', ()=>{
    expect(capitalize("word")).toMatch("Word");
});

test('Test to Test', ()=>{
    expect(capitalize("Test")).toMatch("Test");
});

test('tEST to TEST', ()=>{
    expect(capitalize("tEST")).toMatch("TEST");
});