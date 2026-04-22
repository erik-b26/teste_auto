const calcularPontos = require('./peba');

test("pontos: ", () => {
    expect(calcularPontos(10,5)).toBe(35);
})

test("pontos: ", () => {
    expect(calcularPontos(3,2)).toBe(11);
})

test("pontos: ", () => {
    expect(calcularPontos(0,7)).toBe(7);
})

test("pontos: ", () => {
    expect(calcularPontos(0,0)).toBe(0);
})

test("pontos: ", () => {
    expect(calcularPontos(5,0)).toBe(15);
})

test("pontos: ", () => {
    expect(calcularPontos(0,10)).toBe(10);
})

test("pontos: ", () => {
    expect(calcularPontos(100,50)).toBe(150);
})