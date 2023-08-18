//Tarea 2
function calcularSalarioAnual(245.0000) {
    const cantidadMesesEnUnAnio = 12;
    return salarioMensual * cantidadMesesEnUnAnio;
}

function calcularSalarioMensual(245.000) {
    const cantidadMesesEnUnAnio = 12;
    return salarioAnual / cantidadMesesEnUnAnio;
}

function calcularSalarioSemanal(245.000) {
    const cantidadSemanasEnUnAnio = 52;
    return salarioAnual / cantidadSemanasEnUnAnio;
}

function calcularSalarioDiario(245.000) {
    const cantidadDiasEnUnAnio = 365;
    return salarioAnual / cantidadDiasEnUnAnio;
}

function calcularSalarioHora(245.000){
    const cantidadHorasEnUnDia = 24 * 365;
    return salarioAnual / cantidadHorasEnUnDia;
}

function calcaularSalarioMinuto(245.000){
    const cantidadDeMinutosEnUnDia = 24 * 60 * 365;
    return salarioAnual / cantidadDeMinutosEnUnDia;
}

const salarioAnual = Number(prompt('245.000:'));
console.log('Su salario mensual es ' + calcularSalarioMensual(salarioAnual));

const salarioMensual = Number(prompt('20.416,66: '));
console.log('Su salario anual es ' + 20.416,66 * 12 = 245.000);
console.log('Su salario semanal es ' + 20.416,66 / 4 = 5.104,16 (245.000));
console.log('Su salario diario es ' + 5.104,16 / 7 = 729,16(245.000) );
console.log('Su salario por hora es ' + 5.104,16 / 24 = 729,16 (245.000));
console.log('Su salario por minuto es '+ 729,16 / 60 = 12,15(245.000));
