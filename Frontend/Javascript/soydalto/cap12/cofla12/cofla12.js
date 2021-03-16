const materiasHTML = document.querySelector(".materias");
const materias = [
    {
        nombre: "Fisica 4",
        nota: "4"
    },{
        nombre: "Fisica 5",
        nota: "5"
    },{
        nombre: "Fisica 6",
        nota: "6"
    },{
        nombre: "Fisica 7",
        nota: "7"
    },{
        nombre: "Fisica 8",
        nota: "8"
    },{
        nombre: "Fisica 9",
        nota: "9"
    },{
        nombre: "Fisica 10",
        nota: "10"
    }
]


const obtenerMateria = (id) => {
    return new Promise((resolve,reject)=> {
        materia = materias[id];
        if (materia == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*400);
    })
}

const devolverMaterias = async () => {
    let materia = []
    for (let i = 0; i < materias.length; i++){
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;  
    }
}

devolverMaterias()