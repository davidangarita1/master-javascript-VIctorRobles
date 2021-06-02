'use strict'

// Tabla de multiplicar de un numero introducido por pantalla

var number = parseInt(prompt("Ingrese un numero"))

console.log(`La tabla del ${number} es:`);

for (let i = 0; i <= 10; i++) {
    let result = i * number;
    console.log(`${number} x ${i} = ${result}`);
}