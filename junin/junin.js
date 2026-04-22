function calcularSalario(diaTra, salario){
    if(salario<=0 || diaTra<=0){
        return 0
    }
    const i = Number((salario / diaTra).toFixed(2));

    return i
}
module.exports = calcularSalario