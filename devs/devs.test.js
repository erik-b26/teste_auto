const somarDevs = require('./devs');

test("Quantidade de devs é: ", () => {
    expect(somarDevs(10,5)).toBe(15);
})

test("Quantidade de devs é: ", () => {
    expect(somarDevs(25,10)).toBe(35);
})

test("Quantidade de devs é: ", () => {
    expect(somarDevs(8,2)).toBe(10);
})