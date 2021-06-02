'use strict'

// Parematros REST y SPREAD

// Parametro REST se define con ...variable
                                        //Asi como en el ejemplo
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log(`Fruta 1: ${fruta1}`);
    console.log(`Fruta 2: ${fruta2}`);
    console.log(resto_de_frutas); // se llama a la variable rest
}
            //fruta1      fruta2    ...resto_de_frutas
listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco") 
// el resultado se captura en un array


//Parametro SPREAD TAMBIEN SE DEFINE CON ...variable pero esta variable desde un array se interpreta como el fruta1, fruta2

            //fruta1     fruta2
var frutas = ["Naranja", "Manzana",]

                //SPREAD
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco")