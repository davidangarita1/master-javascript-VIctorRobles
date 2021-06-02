var david = {
    nombre: "David",
    edad: 26
}

var alba = {
    nombre: "Alba",
    edad: 26
}

var daiver = {
    nombre: "Daiver",
    edad: 24
}

var students = [david, alba, daiver];

var lanzamientos = 10;

function random() {
    var random = Math.trunc(Math.random() * students.length);
    return random
}

function promedio() {
    var contador = [];
    for (let i = 0; i < lanzamientos; i++) {
        var numero = random();
        contador.push(numero);
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(contador);
    var promedio = Math.trunc(contador.reduce(reducer) / lanzamientos);
    console.log(promedio);
    return promedio;
}

console.log(`En promedio de ${lanzamientos} lanzamientos, ${students[promedio()].nombre} salio mas veces`);