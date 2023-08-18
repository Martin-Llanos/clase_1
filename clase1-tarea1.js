function calcularEdad(anioActual, anioNacimiento) {
    return anioActual - anioNacimiento;
}

const anioActual = Number(prompt(2023));
const anioNacimiento = Number(prompt(1998));

console.log('Tenés ' + calcularEdad(2023 - 1998);//Tarea 1


