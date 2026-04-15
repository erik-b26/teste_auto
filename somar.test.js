const somar = require('./somar')

test("Somar 2 e 3, retornar 5: ",() =>{
    expect(somar(2,3)).toBe(5);
})