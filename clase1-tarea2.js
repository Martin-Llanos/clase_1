//Tarea 2
function calcularSalarioAnual(salarioMensual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioMensual * cantidadMesesEnUnAnio;
}

function calcularSalarioMensual(salarioAnual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioAnual / cantidadMesesEnUnAnio;
}

function calcularSalarioSemanal(salarioAnual) {
    const cantidadSemanasEnUnAnio = 52;
    return salarioAnual / cantidadSemanasEnUnAnio;
}

function calcularSalarioDiario(salarioAnual) {
    const cantidadDiasEnUnAnio = 365;
    return salarioAnual / cantidadDiasEnUnAnio;
}

function calcularSalarioHora(salarioAnual){
    const cantidadHorasEnUnDia = 24 * 365;
    return salarioAnual / cantidadHorasEnUnDia;
}

function calcaularSalarioMinuto(salarioAnual){
    const cantidadDeMinutosEnUnDia = 24 * 60 * 365;
    return salarioAnual / cantidadDeMinutosEnUnDia;
}

const salarioAnual = Number(prompt('Ingrese su salario anual: '));
console.log('Su salario mensual es ' + calcularSalarioMensual(salarioAnual));

const salarioMensual = Number(prompt('Ingrese su salario mensual: '));
console.log('Su salario anual es ' + calcularSalarioAnual(salarioMensual));
console.log('Su salario semanal es ' + calcularSalarioSemanal(salarioAnual));
console.log('Su salario diario es ' + calcularSalarioDiario(salarioAnual));
console.log('Su salario por hora es ' + calcularSalarioHora(salarioAnual));
console.log('Su salario por minuto es '+ calcaularSalarioMinuto(salarioAnual));
