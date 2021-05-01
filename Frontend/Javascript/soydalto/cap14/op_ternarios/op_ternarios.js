"use strict";

edad = 17;

if (edad > 18){
    console.log("es mayor");
} else {
    console.log("es menor");
}

(edad > 18) ? console.log("mayor") : console.log("menor");

valor1 = "valor 1";
valor2 = "valor 2";
valor3 = "valor 3";

let arr = ["manzana", "pera", "banana"]
let arr2 = ["kiwi", "naranja"]

arr.push(...arr2)

console.log(valor1, valor2 ,valor3);

const sumar = (num1, num2)=> {
    console.log(num1 + num2);
}