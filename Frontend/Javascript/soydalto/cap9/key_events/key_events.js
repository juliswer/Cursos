const input = document.querySelector(".input-prueba")

input.addEventListener("keydown", (e) => {
    console.log("una tecla fue presionada");
});

input.addEventListener("keypress", (e) => {
    console.log("una tecla fue presionada y la solto");
});

input.addEventListener("keyup", (e) => {
    console.log("una tecla fue soltada");
});