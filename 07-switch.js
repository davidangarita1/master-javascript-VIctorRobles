'use strict'

// Switch

var edad = 25;
var imprime;

    // Toma el valor
switch (edad) {
    // Comparador de valor
    case 18:
        // Accion de resultado
        imprime = 'Acabas de cumplir la mayoria de edad';
        break;
    case 25:
        imprime = 'Ya eres un adulto';
        break;
    case 40:
        imprime = 'Crisis de los cuarenta';
        break;
    case 75:
        imprime = 'Eres ya un anciano';
        break;

    default:
        imprime = 'Tu edad es neutra';
        break;
}

console.log(`${imprime}`);