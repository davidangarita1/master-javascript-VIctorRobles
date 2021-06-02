'use strict'

// Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de Javascript";
var texto2 = "es muy buen curso";

var dato = numero.toString();
    dato = texto1.toUpperCase(); // Convierte a MAYUSCULAS
    dato = texto2.toLowerCase(); // Convierte a minisculas

console.log(dato);

// Calcular longitud
var nombre = "David Angarita";
    nombre = ["hoa", "hola"];

console.log(nombre.length);

// Concatenar - Unir textos

// var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" " + texto2)

console.log(textoTotal);