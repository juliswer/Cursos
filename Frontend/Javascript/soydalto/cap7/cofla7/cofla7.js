let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es: ${alto}, y el ancho de: ${ancho}`)

if (comprar) {
    alert("compra realizada")
} else {
    alert("compra cancelada")
}