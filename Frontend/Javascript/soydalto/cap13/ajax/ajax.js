const peticion = new XMLHttpRequest();

peticion.addEventListener("readystatechange", () => {
    if (peticion.readyState == 4 && peticion.status == 200) {
        console.log(peticion.response)
    }
})

peticion.open("GET", "ajax.txt");

peticion.send()

peticion.addEventListener("load", () => {
    let respuesta;
    if (peticion.status == 200) respuesta = peticion.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";
    console.log(JSON.parse(respuesta).nombre)
})

peticion.open("POST", "ajax.txt");

let peticion;
if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");