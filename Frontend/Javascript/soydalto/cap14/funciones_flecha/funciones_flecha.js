const saludar = () => {
    console.log("hola");
    console.log("como estas?");
}

resultado = saludar();
console.log(resultado);

const objeto = {
    nombre : "lucas",
    saludar: function(){console.log(`Hola ${this.nombre}`);}
}

const objeto2 = {
    nombre : "lucas",
    saludar: ()=>{console.log(`Hola ${this.nombre}`);}
}

objeto.saludar()
objeto.saludar2()

function constructorPersona(nombre,apellido){
    "use strict";
    this.nombre = nombre;
    this.apellido = apellido;
}

const persona = new constructorPersona("pepe", "garay")

console.log(persona);