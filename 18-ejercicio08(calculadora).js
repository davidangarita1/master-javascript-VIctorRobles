'use strict'

/*
Calculadora:
- Pida dos numeros por pantalla
-Si ingresas uno mal que vuelva a pedir el numero
- En el cuerpo de la pagina, en el log comprobar el resultado de sumar, restar, multiplicar y dividir esas cifras
*/

var num1 = parseInt(prompt("Ingrese el primer numero", 0))
var num2 = parseInt(prompt("Ingrese el segundo numero", 0))

while(num1 < 0 || num2 <0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Ingrese el primer numero", 0))
    num2 = parseInt(prompt("Ingrese el segundo numero", 0))
}

var result = console.log(`* La suma es: ${num1+num2}\n* La resta es: ${num1-num2}\n* La multiplicación es: ${num1*num2}\n* La división es: ${num1/num2}`);