const reverseString = require("./reverseString");

test("Words to sdroW", ()=>{
    expect(reverseString("Words")).toBe("sdroW")
})

test("many Words to sdroW", ()=>{
    expect(reverseString("many Words")).toBe("sdroW ynam")
})

test("words, maybe. to .ebyam sdrow", ()=>{
    expect(reverseString("words, maybe.")).toBe(".ebyam ,sdrow")
})