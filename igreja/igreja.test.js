const calcularIgreja = require('./igreja');

test("Faltam: ", () => {
    expect(calcularIgreja(5000,1200)).toBe(3800);
})

test("Faltam: ", () => {
    expect(calcularIgreja(3000,3000)).toBe(0);
})

test("Faltam: ", () => {
    expect(calcularIgreja(4500,2000)).toBe(2500);
})

test("Faltam: ", () => {
    expect(calcularIgreja(4000,5000)).toBe(-1000);
})

test("Faltam: ", () => {
    expect(calcularIgreja(3500,0)).toBe(3500);
})

test("Faltam: ", () => {
    expect(calcularIgreja(0,0)).toBe(0);
})
