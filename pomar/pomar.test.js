const calcularLaranjas = require('./pomar');

test("Quantidade de laranjas vendidas: ", () => {
    expect(calcularLaranjas(100,60)).toBe(40);
})

test("Quantidade de laranjas vendidas: ", () => {
    expect(calcularLaranjas(250,180)).toBe(70);
})

test("Quantidade de laranjas vendidas: ", () => {
    expect(calcularLaranjas(80,80)).toBe(0);
})
