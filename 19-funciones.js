'use strict'

// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones

//Palabra reservada function
        //Nombre de asignas

var texto;

function enviarTexto() {
    texto = "Este es el texto que retorna la función"
    return texto // Valor que envia la funcion
}

console.log(enviarTexto(texto)); // Se ejecuta la funcion y (resultado) recibe el valor de la funcion

function calculadora(num1, num2) {
    var resultado = `* La suma es: ${num1 + num2}\n* La resta es: ${num1-num2}\n* La multiplicación es: ${num1*num2}\n* La división es: ${num1/num2}\n***********************************`
    return resultado
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
    console.log(calculadora(i,5));
}
