const contenedor = document.querySelectorAll(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");

const h2_antiguo = document.querySelector(".h2");

console.log(h2_antiguo.nextSibling);
console.log(h2_antiguo.previousSibling);
console.log(h2_antiguo.nextElementSibling);
console.log(h2_antiguo.previousElementSibling);