'use strict'

// Bucle while

var year = 2018;

    // Mientras se cumpla esto
while(year <= 2020){
    // Ejecuta esto
    if (year % 2 === 0) {
        console.log(`Estamos en el año: ${year}`);
    }
    // Sumale al contador
    year++;
}

// Do while

var years = 20;

do {
    //Haz esto
    console.log(`Soy ${years} y parare cuando sea mayor o igual a 25`);
    years++;
    
    //Mientras se cumpla esto
} while(years <= 25)