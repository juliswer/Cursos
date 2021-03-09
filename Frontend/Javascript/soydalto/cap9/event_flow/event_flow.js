const button = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor");

contenedor.addEventListener("click", (e) => {
    alert("di click")
}, true);

button.addEventListener("click", (e) => {
    alert("di click pero en el boton")
});