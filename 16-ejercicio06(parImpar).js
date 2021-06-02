'use strict'

/*
QU¡ue nos diga si un numero es par o impar.
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

var number = parseInt(prompt('Introduce un numero', 0))

while(isNaN(number)){
    number = parseInt(prompt('Introduce un numero', 0))
}

if (number % 2 === 0) {
    console.log("Es un numero par");
} else {
    console.log("Es impar");
}