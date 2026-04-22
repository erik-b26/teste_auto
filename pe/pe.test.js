const calcularPe = require('./pe');

test("O total é: ", () => {
    expect(calcularPe(120,10)).toBe(50);
})


test("O total é: ", () => {
    expect(calcularPe(85,5)).toBe(425);
})


test("O total é: ", () => {
    expect(calcularPe(199.90,3)).toBe(599.70);
})
