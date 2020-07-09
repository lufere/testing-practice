caesar = require('./caesar');

test("Simple shift", ()=>{
    expect(caesar("a",2)).toBe("c")
})

test("Shift a word", ()=>{
    expect(caesar("word",1)).toBe("xpse")
})

test("Multiple words", ()=>{
    expect(caesar("two words",1)).toBe("uxp xpset")
})

test("Add punctuation", ()=>{
    expect(caesar("two words, probably.",1)).toBe("uxp xpset, qspcbcmz.")
})

test("Both upper and lower case", ()=>{
    expect(caesar("words aNd WORDS",1)).toBe("xpset bOe XPSET")
})

test("Negative shift", ()=>{
    expect(caesar("ifz uifsf",-1)).toBe("hey there")
})