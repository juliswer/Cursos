"use strict";

let nombre = "lucas";

console.log(nombre);

const obj = {nombre: "lucas"};

Object.preventExtensions(obj);

console.log(obj.nombre);

const str = "lucas dalto";
str.canal = "soy dalto"; //no se puede
console.log(str.canal);

function hablar(texto,texto){
    console.log(texto);
}