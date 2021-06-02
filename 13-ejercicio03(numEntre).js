'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numero introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

if (numero1 === numero2) {
    console.log('Los numero son iguales');
} else if (numero1 < numero2) {
    console.log(`De ${numero1} a ${numero2} estan estos numeros:`);
    for (let i = numero1; i <= numero2; i++) {
        console.log(i);
    }
} else if (numero2 < numero1) {
    console.log(`De ${numero1} a ${numero2} estan estos numeros:`);
    for (let i = numero1; i >= numero2; i--) {
        console.log(i);
    }
}
