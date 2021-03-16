function prueba(callbacks){
    callbacks("pedro")
}

function decirNombre(nombre){
    console.log(nombre)
}

prueba(decirNombre);

class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

persona = new Persona ("pepito", "@pepito")

console.log(persona)

const data = [
    ["Pepito", "@pepito"],
    ["Pepito", "@pepito"],
    ["Pepito", "@pepito"],
    ["Pepito", "@pepito"],
    ["Pepito", "@pepito"]
];

let personas = []

for(let i = 0; i <data.length; i++){
    personas[i] = new Persona(data[i][0],data[i][1])
}

const personas = personas;

console.log(personas);

const obtenerPersona = (id,cb) => {
    if (personas[id] == undefined) {
        cb("NO se ha encontrado a la persona")
    } else {
        cb(null,personas[id],id)
    }
}

const obtenerInstagram = (id,cb)=> {
    if (personas[id].instagram == undefined) {
        cb("NO se ha encontrado el instagram")
    } else {
        cb(null,personas[id].instagram)
    }
}

obtenerPersona(1,(error,persona)=> {
    if(error){
        console.log(error)
    } else {
        console.log(persona.nombre);
        console.log(obtenerInstagram(id, (error,persona)=> {
            if(error){
                console.log(error)
            } else {
                console.log(instagram)
            }
        }));
    }
})