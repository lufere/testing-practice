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

test("Wrap around", ()=>{
    expect(caesar("z",2)).toBe("b")
})

test("Negative wrap around", ()=>{
    expect(caesar("a",-2)).toBe("y")
})

test("Big positive shift", ()=>{
    // expect(caesar("hey there",28)).toBe("ifz uifsf")
    expect(caesar("Hey there",42)).toBe("Xuo jxuhu")
})

test("Big negative shift", ()=>{
    // expect(caesar("hey there",28)).toBe("ifz uifsf")
    expect(caesar("Some Big Words oveR Here",-77)).toBe("Tpnf Cjh Xpset pwfS Ifsf")
})

test("Full 360", ()=>{
    expect(caesar("Hey there",26)).toBe("Hey there")
})

test("0 shift", ()=>{
    // expect(caesar("hey there",28)).toBe("ifz uifsf")
    expect(caesar("Hey there",0)).toBe("Hey there")
})