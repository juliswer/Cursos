"use strict";

const archivo = document.getElementById('archivo');
archivo.addEventListener("change", (e) => {
    leerArchivo(archivo.files[0])
})

const leerArchivo = ar => {
    for (let i = 0; i < ar.length; i++) {
        const reader = new FileReader();
            reader.readAsDataURL(ar[i])
            reader.addEventListener('load', (e) => {
                console.log(JSON.parse(e.currentTarget.result));
            })
            let newImg = `<img src="${e.currentTarget.result}">`
    }        
}

