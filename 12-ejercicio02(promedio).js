'use strict'

/*
Utilizando un bucle, motrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduci numeros hasta que ingreses uno negativo', 0))

    if (isNaN(numero)) {
        numero = 0;
    }else if (numero >= 0){
        suma += numero;

        contador++;
    }
    console.log(`* Suma total es: ${suma} y Contador esta en: ${contador}`);
}while(numero >= 0)

console.log('La media de todos los numeros es: ' + (suma/contador));