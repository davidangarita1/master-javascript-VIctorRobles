'use strict'

// Metodos de busqueda

var texto1 = "Bienvenido al curso de curso Javascript";
var texto2 = "es muy buen curso";

                    //Encuenta la palabra
var busqueda = texto1.indexOf("curso") //  14
    busqueda = texto1.lastIndexOf("curso") // 14
    busqueda = texto1.search("curso"); // 14
    busqueda = texto1.match(/curso/gi) //Busqueda global ['curso','curso']
    busqueda = texto1.substr(14, 3) // cur
    busqueda = texto1.charAt(44) // i
    busqueda = texto1.startsWith("Bienvenido") // true
    busqueda = texto1.endsWith("Javascript") // true
    busqueda = texto1.includes("Javascript") // true

console.log(busqueda);