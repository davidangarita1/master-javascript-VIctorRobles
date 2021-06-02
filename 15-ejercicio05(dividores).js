'use strict'

/*
Muestre todos lo numeros divisores de un numero introduce en prompt
*/

var numero = parseInt(prompt("Ingresa un numero", 1))

for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        console.log(`Divisor: ${i}`);
    }
}