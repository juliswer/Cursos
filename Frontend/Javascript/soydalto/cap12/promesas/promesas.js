//con callbacks

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

// con promesas

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

const obtenerPersona = (id,) => {
    return new Promise ((resolve,reject)=> {
        if(personas[id] == undefined) reject ("No se ha encontrado la persona")
        else {resolve(personas[id])}                      
    })
}

const obtenerInstagram = (id)=> {
    return new Promise ((resolve,reject)=> {
        if(personas[id].instagram == undefined) reject ("No se ha encontrado el instagram")
        else {resolve(personas[id].instagram)}  
    })
}

let id = 4;

obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(id);
    }).then((instagram)=>{
        console.log(instagram)
   }).catch((e)=>{
    console.log(e)
})

const objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
}

function obtenerInformacion(){
    new Promise((resolve,reyect)=> {
        setTimeout(()=>{
            resolve(objeto)
        },1000)
    })
}

console.log(obtenerInformacion())