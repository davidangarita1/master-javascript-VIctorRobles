'use strict'

// Condicional IF
// Si A es igual a B entonces haz algo

/*
// Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ===
    Distinto: !=
*/

var edad = 71;
var nombre = 'David Angarita'

if (edad >= 18) {
    console.log(`* ${nombre} tiene ${edad} años , es mayor de edad.`);
    
    if (edad <= 33) {
        console.log(`* Todavia es millenial`);
    } else if (edad >= 70){
        console.log(`* Es anciano`);
    }
} else {
    console.log(`* ${nombre} tiene ${edad} años, es menor de edad`);
}


/*
// Operadores lógicos
AND(Y): &&
OR(O): ||
Negación: !
*/

// Negación
var year = 2018;
if (year != 2016) {
    console.log(`-------------------------`);
    console.log(`El año no es 2016`);
}

// AND
if (year >= 2000 && year <= 2021) {
    console.log(`-------------------------`);
    console.log(`Estamos en la era actual`);
} else {
    console.log(`-------------------------`);
    console.log('Estamos en la era post moderna');
}

// OR
if (year == 2008 || year == 2018) {
    console.log(`-------------------------`);
    console.log('El año acaba en 8');
}

