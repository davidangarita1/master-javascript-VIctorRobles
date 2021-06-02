'use strict'

// Funciones anonimas
// Es una función que no tiene nombre

    //variable          //parametro
var pelicula = function(nombre) {
    return "La pelicula es: " + nombre // concatena parametro
}

console.log(pelicula("Titanic"));


            //  var1, var2, callback1,    callback2
function sumame(num1, num2, sumaYmuestra, sumaPorDos) {
    // creo la variable sumar con el resultado
    var sumar = num1 + num2;

    //Invoco sumaYmuestra capturando el resultado de sumar
    sumaYmuestra(sumar);

    //Invoco sumaPorDos capturando el resultado de sumar
    sumaPorDos(sumar);

    // returno el resultado de sumar
    return sumar
}

    //var1, var2
sumame(5, 7,
    //callback 1 
    function(dato){
    console.log("La suma es:", dato);
},  
    //callback 2
    function(dato){
    console.log("La suma por dos es: ", (dato * 2));
});

