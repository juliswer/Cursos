"use strict";

this.nombre = "dalto"

function saludar(){ 
    console.log(`Hola ${this.nombre}`);
}

saludar()

const saludar2 = () => {
    console.log(`Hola ${this.nombre}`);
}

const saludar = ()=> {
    console.log(`Hola ${this.nombre}`);
}

const objeto = {
    nombre: "Lucas",
    saludar
}

objeto.saludar()

function otroContext(){
    this.nombre = "Roberto";
    this.saludar = saludar;
}

const objeto2 = new otroContext();

objeto2.saludar()

otroContext()