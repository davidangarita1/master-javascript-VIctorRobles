'use strict'

function holaMundo(texto) {
    // scope local
    var hola_mundo = "Texto dentro de funcion";
    console.log(texto);
                    //Convierte numero a string
    console.log(numero.toString());
    console.log(hola_mundo);
}

// scope Global
var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);
