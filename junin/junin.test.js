const calcularSalario = require('./junin');

test("voce por dia: ", () => {
    expect(calcularSalario(3000,20)).toBe(150);
})

test("voce por dia: ", () => {
    expect(calcularSalario(4500,22)).toBe(204.55);
})

test("voce por dia: ", () => {
    expect(calcularSalario(2000,10)).toBe(200);
})

test("voce por dia: ", () => {
    expect(calcularSalario(3000,0)).toBe(0);
})

test("voce por dia: ", () => {
    expect(calcularSalario(0,20)).toBe(0);
})

test("voce por dia: ", () => {
    expect(calcularSalario(0,0)).toBe(0);
})

test("voce por dia: ", () => {
    expect(calcularSalario(5000,31)).toBe(161.29);
})