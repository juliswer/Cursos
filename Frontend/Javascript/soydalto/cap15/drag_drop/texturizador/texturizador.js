"use strict";

const cambiarTextura = (n,e) => {
    e.dataTransfer.setData(`textura${n}`)
}
const zona = document.querySelector(".zona");
zona.addEventListener("dragover", ()=> {
    e.preventDefault();
})

zona.addEventListener("drop", () => {
    zona.style.background
})

for (let i = 1; i < document.querySelector(".texturas").children.length + 1; i++) {
    document.querySelector(`textura${i}`).addEventListener("dragstart", (e)=> cambiarTextura(i,e))
}