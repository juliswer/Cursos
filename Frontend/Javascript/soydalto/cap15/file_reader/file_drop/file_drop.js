const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover", (e) => {
    e.preventDefault();
    changeStyle(e.srcElement, "#222");
})

zona.addEventListener("dragleave", (e) => {
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
})

zona.addEventListener('drop', e => {
    e.preventDefault()
    changeStyle(e.srcElement, "#888")
    cargarArchivo(e.dataTransfer.files[0])
    zona.style.border = "4px solid #888"
})

const changeStyle = (obj,color) => {
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`; 
}

const cargarArchivo = ar => {
    const reader = new FileReader();
    reader.readAsText(ar)
    reader.readAsDataURL(ar)
    reader.readAsArrayBuffer(ar)
    reader.addEventListener('progress', e => {
        let carga = Math.round((e.loaded / ar.size * 100))
        zona.textContent = `${carga}`;
        document.querySelector(".barra-de-carga").style.width = `${carga}`
    })
    reader.addEventListener('load', e => {
        let url = URL.createObjectURL(e.currentTarget.result);
        let video = new Blob([new Uint8Array(e.currentTarget.result) ], {type: 'video/mp4'})
        let img = document.createElement("IMG");
        img.setAttribute("src", url);
        document.querySelector(".resultado").appendChild(img)
        document.querySelector(".resultado").textContent = e.currentTarget.result
        video.play()
    })
}

