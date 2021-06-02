'use strict'

// Metodos de reemplazo

var texto1 = "Bienvenido al curso de Javascript";
var texto2 = "es muy buen curso";

var reemplazo = texto1.replace("Javascript", "Angular"); // Bienvenido al curso de Angular
    reemplazo = texto1.slice(14) // curso de Javascript
    reemplazo = texto1.slice(14, 22) // curso de
    reemplazo = texto1.split(" "); // ["Bienvenido", "al", "curso"]
    reemplazo = texto1.trim(); // elimina espacios de los lados

console.log(reemplazo);