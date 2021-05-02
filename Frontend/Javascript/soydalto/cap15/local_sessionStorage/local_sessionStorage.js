"use strict";

let nombre = localStorage.setItem("nombre","pedro")

console.log(localStorage);

let nombre = sessionStorage.getItem("nombre");

console.log(nombre);

setTimeout(( ) => {
    let nombre = sessionStorage.removeItem("nombre" )
}, 2000)

setTimeout(( ) => {
    let nombre = localStorage.clear()
}, 2000)