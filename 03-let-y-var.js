'use strict'

//Pruebas con Let y var


// Prueba con var
var numero = 40;
console.log(numero); // valor 40

if (true) {
    // Var modifica a la variable global
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50


// Prueba con Let
var texto = "Curso JS victoroblesweb.es";
console.log(texto); // valor js

if (true) {
    // Let no modifica a la variable global
    let texto = "Curso Javascript";
    console.log(texto); // valor Javascript
}

console.log(texto);